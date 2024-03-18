from django.contrib.auth import get_user_model, login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import permissions, status, generics
from .serializers import MarkerSerialiazer, PercorsoSerializer, DirectionSerializer, MyTokenObtainPairSerializer, RegisterSerializer
from .models import Marker, Percorso, Direction, User
#from .serializers import UserSerializer
#from .validations import custom_validation, validate_email, validate_password
#from rest_framework.permissions import IsAdminUser
#from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny, IsAuthenticated


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


# Get All Routes

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = "Hello buddy"
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)


'''
class UserDetailsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
'''


class MarkerView(viewsets.ModelViewSet):
    serializer_class = MarkerSerialiazer
    queryset = Marker.objects.all()

    #permission_classes = [IsAdminUser]  # Restrict access to admin users


class PercorsoView(viewsets.ModelViewSet):
    serializer_class = PercorsoSerializer
    queryset = Percorso.objects.all()


class DirectionView(viewsets.ModelViewSet):
    serializer_class = DirectionSerializer
    queryset = Direction.objects.all()


# Per la update
class MarkerViewSet(viewsets.ModelViewSet):
    queryset = Marker.objects.all()
    serializer_class = MarkerSerialiazer


