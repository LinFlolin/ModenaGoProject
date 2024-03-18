from django.db import models

class Percorso(models.Model):
    Titolo = models.CharField(max_length=255)

    def __str__(self):
        return self.Titolo

class Marker (models.Model):
    Nome = models.CharField(max_length=255)
    Indirizzo = models.CharField(max_length=255)
    Descrizione = models.TextField(max_length=3000)
    Desbrev = models.TextField(max_length=500, default="")
    Contatti = models.TextField(max_length=300, default="")
    Orari = models.TextField(max_length=1000, default="")
    Costi = models.TextField(max_length=500, default="")
    Latitudine = models.CharField(max_length=255)
    Longitudine = models.CharField(max_length=255)
    Sfida = models.TextField(max_length=300)
    Immagine = models.ImageField(null=True, blank=True, upload_to="images/")

    percorso = models.ForeignKey(Percorso, on_delete=models.CASCADE, related_name='markers',null=True )

    def __str__(self):
        return self.Nome



class Direction(models.Model):
    UserLat = models.CharField(max_length=255)
    UserLong = models.CharField(max_length=255)
     