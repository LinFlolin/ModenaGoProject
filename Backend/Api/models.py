from django.db import models

class LuoghiAttrazione (models.Model):
    Titolo = models.TextField(max_length = 100)
    Descrizione = models.TextField(max_length = 500)
    Sfida = models.TextField(max_length = 300)
    def __str__(self):
        return self.Titolo
    