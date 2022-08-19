from django.urls import path

from orderapp.views import OrderCreateView, OrderMenuView

app_name = 'orderapp'

urlpatterns = [
    path('menu_choice/', OrderMenuView.as_view(), name='menu_choice'),
    path('payment_method/', OrderCreateView.as_view(), name='payment_method'),
    #path('cash/', main, name='cash'),
    #path('credit_card/', main, name='credit_card'),
    #path('transfer/', main, name='transfer'),
]