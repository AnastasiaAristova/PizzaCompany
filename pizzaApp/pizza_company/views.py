from django.core.exceptions import ValidationError, ObjectDoesNotExist
from django.http import JsonResponse
from django.shortcuts import render, redirect

from .models import *
from .forms import *



def index(request):
    return render(request, "pizza_company/index.html")


def menuPage(request):
    pizzas = Pizza.objects.all()
    return render(request, "pizza_company/menu.html", {"pizzas": pizzas})


def cartPage(request):
    return render(request, "pizza_company/cart.html")


def homePage(request):
    return render(request, "pizza_company/home.html")

def enterRequest(request):
    if request.method == 'POST':
        form = UserData(request.POST)
        if form.is_valid():
            return redirect('main')


def registrationPage(request):
    if request.method == 'POST':
        form = AddUser(request.POST)
        if form.is_valid():
            user = form.save()
            return redirect('main')
        #else:
        #   return render(request, "pizza_company/registration.html", {"form": form})
    else:
        form = AddUser()
        form1 = UserData()
    return render(request, "pizza_company/registration.html", {"form": form, "form1": form1})


def addPizzaToCart(request):
    response_data = {}
    print(request.POST)
    return JsonResponse(response_data)


