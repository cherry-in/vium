from django.shortcuts import render

# 배달 메인 화면
from restaurantapp.models import Restaurant, Menu


def categories(request):
    context = {}
    return render(request, 'restaurantapp/categories.html', context)

# 음식점 리스트
def restaurant_list(request):
    context = {}
    return render(request, 'restaurantapp/list.html', context)

# 음식점 클릭 시 기본 정보
def restaurant_main(request):
    context = {}
    return render(request, 'restaurantapp/main.html', context)

# 음식점 디테일 정보
def restaurant_detail(request):
    context = {}
    return render(request, 'restaurantapp/detail.html', context)


