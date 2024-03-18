from rest_framework import serializers
from .models import Marker, Percorso, Direction, User
#from .models import CustomUser
#from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # These are claims, you can add custom claims
        token['full_name'] = user.profile.full_name
        token['username'] = user.username
        token['email'] = user.email
        #token['bio'] = user.profile.bio
        #token['image'] = str(user.profile.image)
        token['verified'] = user.profile.verified
        # ...
        return token


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('email', 'username', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email']

        )

        user.set_password(validated_data['password'])
        user.save()

        return user


#UserModel = get_user_model()
'''
class UserSerializer(serializers.ModelSerializer):
    is_admin = serializers.SerializerMethodField()  # Campo aggiuntivo per il ruolo dell'utente

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_admin']  # Assicurati di includere il campo aggiuntivo

    def get_is_admin(self, obj):
        return obj.is_staff  # Restituisci True se l'utente è un amministratore, False altrimenti
'''


class MarkerSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = Marker
        fields = (
        'id', 'Nome', 'Indirizzo', 'Descrizione', 'Desbrev', 'Contatti', 'Orari', 'Costi', 'Latitudine', 'Longitudine',
        'Sfida', 'Immagine')


class PercorsoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Percorso
        fields = ('Titolo',)


class DirectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Direction
        fields = ('UserLat', 'UserLong')

