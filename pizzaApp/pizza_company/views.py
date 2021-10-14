from django.core.exceptions import ValidationError, ObjectDoesNotExist
from django.http import JsonResponse
from django.shortcuts import render, redirect
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .models import *
from .forms import AddUser
from .serializers import *


def index(request):
    return render(request, "pizza_company/index.html")


def menuPage(request):
    pizzas = Pizza.objects.all()
    return render(request, "pizza_company/menu.html", {"pizzas": pizzas})


def cartPage(request):
    return render(request, "pizza_company/cart.html")


def homePage(request):
    return render(request, "pizza_company/home.html")


def registrationPage(request):
    if request.method == 'POST':
        form = AddUser(request.POST)
        if form.is_valid():
            user = form.save()
            return redirect('main')
    else:
        form = AddUser()
    return render(request, "pizza_company/registration.html", {"form": form})


def addPizzaToCart(request):
    response_data = {}
    print(request.POST)
   # try:
    #    order = PizzaUsers.objects.get(done=False)

  #  except ObjectDoesNotExist:
    #    new_order = PizzaUsers.objects.create()
    #    order_inf = OrderInformation.objects.create(
    #        order=new_order.id,
      #      pizza=request.POST.get('id'),
      #      quantity=request.POST.get('quantity')
       # )
        #w = AddPizzaSerializer(request.POST)
        # print(w.q1)
        # print(w.q2)
        # r = w.data.get('q1') + w.data.get('q2')
        #print(w.data.get('q1'))
    return JsonResponse(response_data)


