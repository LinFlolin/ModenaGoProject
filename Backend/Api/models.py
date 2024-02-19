from django.db import models


class Marker (models.Model):
    Nome = models.CharField(max_length=255)
    Indirizzo = models.CharField(max_length=255)
    Descrizione = models.TextField(max_length=500)
    Latitudine = models.CharField(max_length=255)
    Longitudine = models.CharField(max_length=255)
    Sfida = models.TextField(max_length=300)
    Immagine = models.ImageField(null=True, blank=True, upload_to="images/")

    def __str__(self):
        return self.Nome

class Percorso(models.Model):
    Titolo = models.CharField(max_length=255)
    def __str__(self):
        return self.Titolo

class Direction(models.Model):
    UserLat = models.CharField(max_length=255)
    UserLong = models.CharField(max_length=255)
     