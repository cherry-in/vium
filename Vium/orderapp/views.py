from django.urls import reverse
from django.views.generic import CreateView, ListView, DetailView

from orderapp.forms import OrderCreateForm, OrderMenuForm
from orderapp.models import Order, OrderMenu


class OrderMenuView(DetailView):
    model = Order
    form_class = OrderMenuForm
    template_name = 'orderapp/menu_choice.html'
    context_object_name = 'target_order'


class OrderCreateView(DetailView):
    model = Order
    form_class = OrderCreateForm
    template_name = 'orderapp/payment_method.html'
    context_object_name = 'target_order'

    '''def get_success_url(self):
        return reverse('articleapp:payment_', kwargs={'pk': self.object.pk})'''