from django.urls import path

from restaurantapp.views import categories, restaurant_detail, restaurant_main, restaurant_list

app_name = 'restaurantapp'

urlpatterns = [
    path('categories/', categories, 'categories'),
    path('restaurant_detail/', restaurant_detail, 'restaurant_detail'),
    path('restaurant_main/', restaurant_main, 'restaurant_main'),
    path('restaurant_list/', restaurant_list, 'restaurant_list'),
]
