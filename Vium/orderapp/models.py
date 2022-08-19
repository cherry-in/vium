from django.db import models
from django.conf import settings
from django.db import models

# Create your models here.

class Order(models.Model):
    class PaymentMethod(models.TextChoices):
        CASH = 'CASH', '현금결제'
        CREDIT_CARD = 'CREDIT_CARD', '카드결제'
        TRANSFER = 'TRANSFER', '계좌이체'

    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    restaurant = models.ForeignKey('restaurantapp.Restaurant', on_delete=models.CASCADE, related_name='order')
    order_time = models.DateTimeField(auto_now_add=True)
    payment_method = models.CharField(max_length=20, choices=PaymentMethod.choices)
    bank = models.CharField(max_length=20)
    transfer_num = models.CharField(max_length=225)
    total_price = models.PositiveIntegerField()
    month_total_price = models.PositiveIntegerField()


class OrderMenu(models.Model):
    menu = models.ForeignKey('restaurantapp.Menu', on_delete=models.CASCADE)
    order = models.ForeignKey('Order', on_delete=models.CASCADE, related_name='order_menu')
    name = models.CharField(max_length=255)
    count = models.PositiveIntegerField()
    price = models.PositiveIntegerField()


