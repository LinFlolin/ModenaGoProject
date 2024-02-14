from django.contrib.auth import get_user_model, login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import permissions, status
from .serializers import LuoghiAttrazioneSerialiazer, MapSerializer, PercorsoSerializer
from .models import LuoghiAttrazione, Mappa, Percorso
from .validations import custom_validation, validate_email, validate_password


class LuoghiAttrazioneView(viewsets.ModelViewSet):
    serializer_class = LuoghiAttrazioneSerialiazer
    queryset = LuoghiAttrazione.objects.all()


class MappaView(viewsets.ModelViewSet):
    serializer_class = MapSerializer
    queryset = Mappa.objects.all()


class PercorsoView(viewsets.ModelViewSet):
    serializer_class = PercorsoSerializer
    queryset = Percorso.objects.all()