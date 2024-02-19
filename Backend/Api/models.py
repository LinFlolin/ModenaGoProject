from django.db import models


# Io non so chi è il pazzo che ha pensato di darmi un limite di 500 caratteri
# ma anyway l'ho alzato un PO'
class LuoghiAttrazione (models.Model):
    Titolo = models.TextField(max_length=100)
    Descrizione = models.TextField(max_length=5000)
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
