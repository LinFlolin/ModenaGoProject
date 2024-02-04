from rest_framework import serializers
from .models import LuoghiAttrazione, Mappa
from django.contrib.auth import get_user_model

UserModel = get_user_model()


class LuoghiAttrazioneSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = LuoghiAttrazione
        fields = ('id', 'Titolo', 'Descrizione', 'Sfida')


class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mappa
        fields = ('id', 'Luogo', 'Latitudine', 'Longitudine')


