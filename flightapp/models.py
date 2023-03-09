from distutils.command.upload import upload
from email.policy import default
# import email
from django.db import models

# Create your models here.
class signup(models.Model):
    username=models.CharField(max_length=30)  
    email=models.CharField(max_length=30)
    password=models.CharField(max_length=20)
   
         
