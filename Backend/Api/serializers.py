from rest_framework import serializers
from .models import LuoghiAttrazione, Mappa

class LuoghiAttrazioneSerialiazer (serializers.ModelSerializer) :
    class Meta :
        model = LuoghiAttrazione 
        fields=('id','Titolo','Descrizione','Sfida', 'Immagine')

class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mappa
        fields = ('id', 'Luogo', 'Latitudine', 'Longitudine')