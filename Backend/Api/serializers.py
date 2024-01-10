from rest_framework import serializers
from .models import LuoghiAtrazione 

class LuoghiAtrazioneSerialiazer (serializers.ModelSerializer) :
    class Meta :
        model = LuoghiAtrazione 
        fields=('id','titolo','descrizione','sfida')