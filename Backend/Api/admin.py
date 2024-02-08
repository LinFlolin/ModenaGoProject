from django.contrib import admin
from .models import LuoghiAttrazione, Mappa

class LuoghiAttrazioneAdmin (admin.ModelAdmin):
    list_display =('titolo','descrizione','sfida','Immagine')

class MappaAdmin(admin.ModelAdmin):
    list_display =('luogo','latitudine','longitudine')

# Register your models here.
    admin.site.register(LuoghiAttrazione)
    admin.site.register(Mappa)

