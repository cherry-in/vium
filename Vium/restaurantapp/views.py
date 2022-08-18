from django.db.models import Q
from django_filters import rest_framework as filters
from rest_framework import mixins
from rest_framework.decorators import action
from rest_framework.filters import OrderingFilter
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet, ReadOnlyModelViewSet

# 수정 필요...

from restaurantapp.models import Menu, Restaurant
from restaurantapp.forms import RestaurantDetailForm, RestaurantListForm, MenuDetailForm


class MenuViewSet(mixins.RetrieveModelMixin, GenericViewSet):
    queryset = Menu.objects.all().prefetch_related('option_group_option')
    serializer_class = MenuDetailForm
    permission_classes = [AllowAny]

class RestaurantViewSet(ReadOnlyModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantListForm
    filter_backends = (filters.DjangoFilterBackend, OrderingFilter)
    ordering_fields = ['reorder_count', 'delivery_charge', 'min_order_price', 'delivery_time']
    ordering = ('id',)
    permission_classes = [AllowAny]
    HOME_VIEW_PAGE_SIZE = 20

    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return RestaurantDetailForm
        return super().get_serializer_class()

    @action(detail=False, methods=['GET'])
    def home_view_reorder_count(self, request, *args, **kwargs):
        qs = self.get_queryset().order_by('-reorder_count').filter(reorder_count__gte=4)
        return self.home_view_results(qs)

    @action(detail=False, methods=['GET'])
    def home_view_delivery_charge(self, request, *args, **kwargs):
        qs = self.get_queryset().filter(delivery_charge=0)
        return self.home_view_results(qs)

    @action(detail=False, methods=['GET'])
    def home_view_delivery_time(self, request, *args, **kwargs):
        qs = self.get_queryset().order_by('delivery_time')
        return self.home_view_results(qs)

    def home_view_results(self, qs):
        serializer = self.get_serializer(qs[:self.HOME_VIEW_PAGE_SIZE], many=True)
        return Response({'results': serializer.data})
