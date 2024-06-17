from django.contrib.auth.models import User
from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.contrib import messages
from HLC.forms import Userinfo
from HLC.models import Userdetails

def index(request):
    return render(request, "index.html")

def login(request):
    return render(request, "login.html")

def insert(request):
    if request.method == "POST":
        form = Userinfo(request.POST)
        if form.is_valid():
            try:
                form.save()
                return redirect('/')
            except:
                pass
    else:
        form = Userinfo()
    return render(request, "index.html", {'form':form})

def show(request):
    userdetails = Userdetails.objects.all()
    return render(request, "userdetails.html", {'userdetails': userdetails})

def edit(request, id):
    userinfo = Userdetails.objects.get(id=id)
    return render(request, 'admin/edit.html', {'userinfo': userinfo})


def update(request, id):
    userinfo = Userdetails.objects.get(id=id)
    form = Userinfo(request.POST, instance=userinfo)
    if form.is_valid():
        form.save()
        return redirect("/show")
    return render(request, 'admin/edit.html', {'userinfo': userinfo})


def destroy(request, id):
    userinfo = Userdetails.objects.get(id=id)
    userinfo.delete()
    return redirect("/show")
