
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from Api.views import LuoghiAttrazioneView

routers = routers.DefaultRouter()
routers.register('LuoghiAtrazioni', LuoghiAttrazioneView,'LuoghiAtrazioni' )

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(routers.urls)),
]