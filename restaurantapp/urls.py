from django.urls import path

from restaurantapp.views import categories, restaurant_detail, restaurant_main, restaurant_list

app_name = 'restaurantapp'

urlpatterns = [
    path('categories/', categories, name='categories'),
    path('detail/', restaurant_detail, name='detail'),
    path('main/', restaurant_main, name='main'),
    path('list/', restaurant_list, name='list'),
]
