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
        if len(orders) == 0:
            return render(request, "pizza_company/home.html")
        else:
            list_orders = []
            for ord in orders:
                order = {}
                order["order"] = ord
                order_inf = OrderInformation.objects.filter(order=ord.pk)
                list_pizzas = []
                for inf in order_inf:
                    pizza = {}
                    pizza["id"] = inf.pizza.pk
                    pizza["name"] = inf.pizza.name
                    pizza["image"] = inf.pizza.image
                    pizza["quantity"] = inf.quantity
                    pizza["price"] = int(inf.pizza.price) * int(inf.quantity)
                    list_pizzas.append(pizza)
                order["pizzas"] = list_pizzas
                list_orders.append(order)
            list_orders.reverse()
            return render(request, "pizza_company/home.html", {"orders": list_orders})
    else:
        return redirect('enter')


def saveOrder(request):
    response_data = {}
    if request.user.is_authenticated:
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
        response_data['response'] = 1
        return JsonResponse(response_data)


class RegisterUser(CreateView):
    form_class = AddUserForm
    template_name = 'pizza_company/signup.html'
    success_url = reverse_lazy('main')

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
