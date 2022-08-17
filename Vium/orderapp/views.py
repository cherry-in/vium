from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet

from orderapp.models import Order
from orderapp.forms import OrderForm, OrderListForm, OrderCreateForm

# 수정 필요...

class OrderViewSet(mixins.CreateModelMixin,
                   mixins.ListModelMixin,
                   mixins.RetrieveModelMixin,
                   GenericViewSet):
    queryset = Order.objects.all()
    form_class = OrderForm

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    def get_form_class(self):
        if self.action == 'create':
            return OrderCreateForm
        if self.action == 'retrieve':
            return OrderForm
        if self.action == 'list':
            return OrderListForm
        return super().get_form_class()

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(owner=self.request.user).select_related('restaurant').prefetch_related('order_menu')

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)