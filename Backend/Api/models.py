from django.db import models

<<<<<<< HEAD
class LuoghiAttrazione(models.Model):
    Titolo = models.TextField(max_length=100)
    Descrizione = models.TextField(max_length=500)
    Sfida = models.TextField(max_length=300)
=======

class LuoghiAttrazione (models.Model):
    Titolo = models.TextField(max_length=100)
    Descrizione = models.TextField(max_length=500)
    Sfida = models.TextField(max_length=300)

>>>>>>> 425d02688f733bacd50466e3c1d2646f58bc5fda
    def __str__(self):
        return self.Titolo


class Mappa(models.Model):
    Luogo = models.CharField(max_length=50)
    Latitudine = models.CharField(max_length=50)
    Longitudine = models.CharField(max_length=50)
<<<<<<< HEAD

    def __str__(self):
        return self.Luogo


=======
    Immagine = models.ImageField(null=True, blank=True, upload_to="images/")

    def __str__(self):
        return self.Luogo
>>>>>>> 425d02688f733bacd50466e3c1d2646f58bc5fda
