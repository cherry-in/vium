from rest_framework import serializers

from orderapp.models import Order
from restaurantapp.models import Menu, MenuGroup, Restaurant


def remaining_time(delivery_time, restaurant_id):
    receipt_complete_count = Order.objects.filter(restaurant_id=restaurant_id, status='접수 완료').count() // 3
    delivery_time += receipt_complete_count * (delivery_time // 2)
    return f'{delivery_time}~{delivery_time + 10}분'


class MenuDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ('id', 'name', 'image', 'caption', 'price', 'option_group')


class MenuListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ('id', 'name', 'image', 'caption', 'menu_group_id', 'price')


class MenuGroupSerializer(serializers.ModelSerializer):
    menu = MenuListSerializer(read_only=True, many=True)

    class Meta:
        model = MenuGroup
        fields = ('name', 'menu')


class RestaurantDetailSerializer(serializers.ModelSerializer):
    menu_group = MenuGroupSerializer(read_only=True, many=True)
    delivery_time = serializers.SerializerMethodField()

    def get_delivery_time(self, obj):
        return remaining_time(obj.delivery_time, obj.id)

    class Meta:
        model = Restaurant
        fields = ('id', 'name', 'image', 'open_time', 'close_time', 'tel_number', 'address',
                  'min_order_price', 'payment_methods', 'business_name', 'company_registration_number',
                  'origin_information', 'allergy_notification', 'delivery_charge', 'delivery_time',
                  'menu_group', 'reorder_count')


class RestaurantListSerializer(serializers.ModelSerializer):
    delivery_time = serializers.SerializerMethodField()
    reorder_count = serializers.IntegerField(source='reorder.count')

    def get_delivery_time(self, obj):
        return remaining_time(obj.delivery_time, obj.id)

    class Meta:
        model = Restaurant
        fields = ('id', 'name', 'reorder_count', 'image', 'delivery_charge', 'delivery_time', 'min_order_price')

