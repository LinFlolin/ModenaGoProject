from rest_framework import serializers
from .models import Marker, Percorso
from django.contrib.auth import get_user_model

UserModel = get_user_model()


class MarkerSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = Marker
        fields = ('id', 'Nome', 'Indirizzo', 'Descrizione', 'Latitudine', 'Longitudine', 'Sfida', 'Immagine')


class PercorsoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Percorso
        fields = ('Titolo',)