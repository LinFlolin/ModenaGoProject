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
<<<<<<< HEAD
        fields = ('id', 'Luogo', 'Latitudine', 'Longitudine')


=======
        fields = ('id', 'Luogo', 'Latitudine', 'Longitudine', 'Immagine')
>>>>>>> 425d02688f733bacd50466e3c1d2646f58bc5fda
