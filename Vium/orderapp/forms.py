from django.core.exceptions import ValidationError
from django.db import models
from django.forms import ModelForm

from orderapp.models import Order, OrderMenu


class OrderMenuNameField(ModelForm):

    def to_representation(self, value):
        names = [f'{order_menu.name} x {order_menu.count}' for order_menu in value.all()]
        return ', '.join(names)


class OrderMenuForm(ModelForm):

    class Meta:
        model = OrderMenu
        fields = ('id', 'menu', 'name', 'price', 'count', 'order_option_group')


class OrderForm(ModelForm):
    order_menu = OrderMenuForm()

    class Meta:
        model = Order
        fields = ('id', 'order_menu', 'address', 'delivery_requests', 'payment_method', 'order_time')


class OrderListForm(ModelForm):
    order_menu = OrderMenuNameField()
    restaurant_name = models.CharField(source='restaurant.name')
    restaurant_image = models.ImageField(source='restaurant.image')

    class Meta:
        model = Order
        fields = ('id', 'order_menu', 'restaurant_name', 'restaurant_image', 'status', 'order_time')


class OrderCreateForm(ModelForm):
    order_menu = OrderMenuForm()

    class Meta:
        model = Order
        fields = ('id', 'order_menu', 'restaurant', 'address', 'payment_method', 'total_price', 'month_total_price')

    def validate(self, attrs):
        if attrs['total_price'] < attrs['restaurant'].min_order_price:
            raise ValidationError('total price < restaurant min price')

        self.total_price = 0
        order_menus = attrs['order_menu']
        for order_menu in order_menus:
            self.valid_order_menu(order_menu)

        restaurant = attrs['restaurant']
        delivery_charge = restaurant.delivery_charge if restaurant.delivery_charge is not None else 0
        discount = restaurant.delivery_discount if restaurant.delivery_discount is not None else 0

        if attrs['total_price'] != self.total_price + delivery_charge - discount:
            raise ValidationError('total price != check_price')

        return attrs

    def create(self, validated_data):
        order_menus = validated_data.pop('order_menu')
        order = Order.objects.create(**validated_data)
        OrderMenu.objects.create(order=order, **order_menus) #음...
        return order

    def valid_order_menu(self, order_menu):
        menu = order_menu['menu']
        if order_menu['name'] != menu.name:
            raise ValidationError('menu.name != model menu.name')
        if order_menu['price'] != menu.price:
            raise ValidationError('menu.price != model menu.price')

        menu_price = order_menu['price']

        menu_price = menu_price * order_menu['count']
        self.total_price += menu_price
