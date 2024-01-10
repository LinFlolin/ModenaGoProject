from django.db import models

# Create your models here.

class LuoghiAtrazione (models.Model):
    #imagine = models.ImageField(upload_to=None, height_field=None, width_field=None)
    titolo = models.TextField(max_length = 100)
    descrizione = models.TextField(max_length = 500)
    sfida = models.TextField(max_length = 300)
    def __str__(self):
        return self.titolo
    