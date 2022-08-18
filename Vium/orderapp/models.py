from django.db import models

# Create your models here.

class Order(models.Model):
    class PaymentMethod(models.TextChoices):
        CASH = 'CASH', '현금결제'
        CREDIT_CARD = 'CREDIT_CARD', '카드결제'
        TRANSFER = 'TRANSFER', '계좌이체'

    class OrderStatus(models.TextChoices):
        WAITING_FOR_RECEIPT = 'WAITING_FOR_RECEIPT', '접수 대기'
        RECEIPT_COMPLETE = 'RECEIPT_COMPLETE', '접수 완료'
        DELIVERY = 'DELIVERY', '배달 중'
        DELIVERY_COMPLETE = 'DELIVERY_COMPLETE', '배달 완료'

    owner = models.ForeignKey('accountapp.User', on_delete=models.CASCADE)
    restaurant = models.ForeignKey('restaurantapp.Restaurant', on_delete=models.CASCADE, related_name='order')
    order_time = models.DateTimeField(auto_now_add=True)
    delivery_status = models.CharField(max_length=20, choices=OrderStatus.choices,
                              default=OrderStatus.WAITING_FOR_RECEIPT)
    address = models.CharField(max_length=255)
    payment_method = models.CharField(max_length=20, choices=PaymentMethod.choices)
    total_price = models.PositiveIntegerField()
    month_total_price = models.PositiveIntegerField()

class OrderMenu(models.Model):
    menu = models.ForeignKey('restaurantapp.Menu', on_delete=models.CASCADE)
    order = models.ForeignKey('Order', on_delete=models.CASCADE, related_name='order_menu')
    name = models.CharField(max_length=255)
    count = models.PositiveIntegerField()
    price = models.PositiveIntegerField()