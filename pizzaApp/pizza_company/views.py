from django.shortcuts import render, redirect

from .models import Pizza
from .forms import AddUser

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



