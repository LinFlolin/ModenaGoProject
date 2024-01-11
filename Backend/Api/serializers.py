from rest_framework import serializers
from .models import LuoghiAttrazione 

class LuoghiAttrazioneSerialiazer (serializers.ModelSerializer) :
    class Meta :
        model = LuoghiAttrazione 
        fields=('id','Titolo','Descrizione','Sfida')