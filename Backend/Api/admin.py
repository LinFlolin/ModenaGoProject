from django.contrib import admin
from .models import LuoghiAttrazione 

class LuoghiAttrazioneAdmin (admin.ModelAdmin):
    list_display =('titolo','descrizione','sfida')

# Register your models here.
    admin.site.register(LuoghiAttrazione,)

