from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet

from orderapp.models import Order
from orderapp.serializers import OrderSerializer, OrderListSerializer, OrderCreateSerializer


class OrderViewSet(mixins.CreateModelMixin,
                   mixins.ListModelMixin,
                   mixins.RetrieveModelMixin,
                   GenericViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    def get_serializer_class(self):
        if self.action == 'create':
            return OrderCreateSerializer
        if self.action == 'retrieve':
            return OrderSerializer
        if self.action == 'list':
            return OrderListSerializer
        return super().get_serializer_class()

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(owner=self.request.user).select_related('restaurant').prefetch_related('order_menu')

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)