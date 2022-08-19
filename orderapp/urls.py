from django.urls import path

from orderapp.views import cash, credit_card, transfer, order_create, menu_choice, order_list

app_name = 'orderapp'

urlpatterns = [
    path('menu_choice/', menu_choice, name='menu_choice'),
    path('order_create/', order_create, name='order_create'),
    path('cash/', cash, name='cash'),
    path('credit_card/', credit_card, name='credit_card'),
    path('transfer/', transfer, name='transfer'),
    path('order_list/', order_list, name='order_list'),
]
