from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

class LuoghiAttrazione (models.Model):
    Titolo = models.TextField(max_length = 100)
    Descrizione = models.TextField(max_length = 500)
    Sfida = models.TextField(max_length = 300)
    def __str__(self):
        return self.Titolo
    

class Mappa(models.Model):
    Luogo = models.CharField(max_length=50)
    Latitudine = models.CharField(max_length=50)
    Longitudine = models.CharField(max_length=50)
    def __str__(self):
        return self.Luogo
