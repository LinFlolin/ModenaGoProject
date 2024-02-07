from rest_framework import serializers
from .models import LuoghiAttrazione, Mappa
from django.contrib.auth import get_user_model

UserModel = get_user_model()


class LuoghiAttrazioneSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = LuoghiAttrazione
        fields = ('id', 'Titolo', 'Descrizione', 'Sfida', 'Immagine')


class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mappa
<<<<<<< HEAD
        fields = ('id', 'Luogo', 'Latitudine', 'Longitudine', 'Immagine')
=======
        fields = ('id', 'Luogo', 'Latitudine', 'Longitudine')
>>>>>>> f5d535e241c49e002754f5347da8f3f7fce19a09
