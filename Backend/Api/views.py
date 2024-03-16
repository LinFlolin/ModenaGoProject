from django.contrib.auth import get_user_model, login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, generics
from rest_framework import permissions, status
from .serializers import MarkerSerialiazer, PercorsoSerializer, DirectionSerializer
from .models import Marker, Percorso, Direction
from .validations import custom_validation, validate_email, validate_password


class MarkerView(viewsets.ModelViewSet):
    serializer_class = MarkerSerialiazer
    queryset = Marker.objects.all()


class PercorsoView(viewsets.ModelViewSet):
    serializer_class = PercorsoSerializer
    queryset = Percorso.objects.all()
    
class DirectionView(viewsets.ModelViewSet):
    serializer_class = DirectionSerializer
    queryset = Direction.objects.all()

# class MarkerDeleteView(generics.DestroyAPIView):
#     serializer_class = MarkerSerialiazer
#     queyset = Marker.objects.all()