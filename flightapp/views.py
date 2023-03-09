from distutils.command.register import register
from django.shortcuts import redirect, render
from django.contrib import messages

from flightapp.models import signup
# Create your views here.
def dashboard(request):
    
    return render(request,'admin/admindashboard.html')

def base(request):

    return render(request,'base.html')

def flight_signin(request):

    return render(request,'flight_signin.html')
def flight_signup(request):
    print("hhhhhhhh")
    # if 'uid' in request.session:
    #     return redirect('base')
    if request.method=="POST":
        print("mmmmmmm")
        uname=request.POST['uname']
        email=request.POST['email']
        pwd=request.POST['password']
        if signup.objects.filter(username=uname).exists():
            messages.info(request,'The user is already exists')
        else:
            re=register(username=uname,email=email,password=pwd)
            re.save()
            return redirect('base')


    return render(request,'flight_signup.html')
