from django.contrib import admin
from .models import Marker, Percorso

class MarkerAdmin (admin.ModelAdmin):
    list_display = ('Nome', 'Indirizzo', 'Descrizione', 'Latitudine', 'Longitudine', 'Sfida', 'Immagine')

class Percorso(admin.ModelAdmin):
    list_display=('Titolo')

# Register your models here.
    admin.site.register(Marker)
    admin.site.register(Percorso)

