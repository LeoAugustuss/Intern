from django import forms
from HLC.models import *

class Userinfo(forms.ModelForm):
    class Meta:
        model = Userdetails
        fields = "__all__"