from django.contrib.auth import logout, login
from django.contrib.auth.views import LoginView
from django.core.exceptions import ValidationError, ObjectDoesNotExist
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView

from .models import *
from .forms import *


def logoutUser(request):
    logout(request)
    return redirect('main')


def index(request):
    return render(request, "pizza_company/index.html")


def menuPage(request):
    pizzas = Pizza.objects.all()
    return render(request, "pizza_company/menu.html", {"pizzas": pizzas})


def cartPage(request):
    form = AddressData()
    return render(request, "pizza_company/cart.html", {"form": form})


def homePage(request):
    if request.user.is_authenticated:
        user = User.objects.get(pk=request.user.pk)
        orders = PizzaUsers.objects.filter(user=user)
        total = orders[0].total
        return render(request, "pizza_company/home.html")
    else:
        return redirect('enter')


def saveOrder(request):
    if request.user.is_authenticated:
        response_data = {}
        data = request.POST
        order = PizzaUsers()
        order.user = User.objects.get(pk=request.user.pk)
        order.street = data.get('street')
        order.house = data.get('house')
        order.apartment = int(data.get('apartment'))
        order.save()
        i = 0
        total = 0
        while i < (len(data)-4)/2:
            order_info = OrderInformation()
            order_info.order = order
            order_info.pizza = Pizza.objects.get(id=data.get('data[%s][id]' % i))
            order_info.quantity = int(data.get('data[%s][amount]' % i))
            order_info.save()
            total = total + order_info.quantity * order_info.pizza.price
            i = i + 1
        order.total = total
        order.save()
        return JsonResponse(response_data)
    else:
        return redirect('enter')


class RegisterUser(CreateView):
    form_class = AddUserForm
    template_name = 'pizza_company/signup.html'
    success_url = reverse_lazy('main')

    # def get_context_data(self, *, object_list=None, **kwargs):
    #     context = super().get_context_data(**kwargs)
    #     c_def = self.get_user_context(title="Регистрация")
    #     return dict(list(context.items()) + list(c_def.items()))

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('main')


class LoginUser(LoginView):
    form_class = UserDataForm
    template_name = 'pizza_company/login.html'
    success_url = reverse_lazy('main')

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

    def get_success_url(self):
        return reverse_lazy('main')
    