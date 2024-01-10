from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LuoghiAtrazioneSerialiazer
from .models import LuoghiAtrazione

class LuoghiAtrazioneView(viewsets.ModelViewSet):
    serializer_class= LuoghiAtrazioneSerialiazer
    queryset = LuoghiAtrazione.objects.all() 

