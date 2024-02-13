from django.db import models


class LuoghiAttrazione (models.Model):
    Titolo = models.TextField(max_length=100)
    Descrizione = models.TextField(max_length=500)
    Sfida = models.TextField(max_length=300)
    Immagine = models.ImageField(null=True, blank=True, upload_to="images/")

    def __str__(self):
        return self.Titolo


class Mappa(models.Model):
    Luogo = models.CharField(max_length=255)
    Latitudine = models.CharField(max_length=255)
    Longitudine = models.CharField(max_length=255)

    def __str__(self):
        return self.Luogo

class Percorso(models.Model):
    Titolo = models.CharField(max_length=255)

    def __str__(self):
        return self.Titolo