from django.db import models

# Create your models here.

class Userdetails(models.Model):
    username = models.CharField(max_length=250)
    fname = models.CharField(max_length=250)
    lname = models.CharField(max_length=250)
    email = models.EmailField()
    password = models.CharField(max_length=250)
    confirmpassword= models.CharField(max_length=250)

    class Meta:
        db_table = "userdetails"