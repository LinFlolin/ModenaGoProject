
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import LuoghiAttrazioneSerialiazer
from .models import LuoghiAttrazione

class LuoghiAttrazioneView(viewsets.ModelViewSet):
    serializer_class= LuoghiAttrazioneSerialiazer
    queryset = LuoghiAttrazione.objects.all() 
    

