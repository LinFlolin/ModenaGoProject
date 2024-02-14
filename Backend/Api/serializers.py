from rest_framework import serializers
from .models import LuoghiAttrazione, Mappa, Percorso
from django.contrib.auth import get_user_model

UserModel = get_user_model()


class LuoghiAttrazioneSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = LuoghiAttrazione
        fields = ('id', 'Titolo', 'Descrizione', 'Sfida', 'Immagine')


class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mappa
        fields = ('id', 'Luogo', 'Latitudine', 'Longitudine')

class PercorsoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Percorso
        fields = ('Titolo',)