from rest_framework import viewsets
from .serializers import LuoghiAttrazioneSerialiazer, MapSerializer
from .models import LuoghiAttrazione, Mappa


class LuoghiAttrazioneView(viewsets.ModelViewSet):
    serializer_class = LuoghiAttrazioneSerialiazer
    queryset = LuoghiAttrazione.objects.all() 


class MappaView(viewsets.ModelViewSet):
    serializer_class = MapSerializer
    queryset = Mappa.objects.all()
