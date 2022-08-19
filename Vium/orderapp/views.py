from django.shortcuts import render

# 음식 선택
def menu_choice(request):
    context = {'menu': 'menu', 'price':19000} #example
    return render(request, 'orderapp/menu_choice.html', context)

# 주문 생성
def order_create(request):
    context = {'month_total_price': 118000} #example
    return render(request, 'orderapp/order_create.html', context)

def cash(request):
    return render(request, 'orderapp/cash.html')

def credit_card(request):
    return render(request, 'orderapp/credit_card.html')

def transfer(request):
    context = {'bank': '신한은행', 'transfer_num': '110-5711-2869'} #example
    return render(request, 'orderapp/transfer.html', context)

def order_list(request):
    context = {}
    return render(request, 'orderapp/order_list.html', context)
