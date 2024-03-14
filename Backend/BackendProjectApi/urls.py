
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework import routers
from Api.views import MarkerView, PercorsoView, DirectionView, MarkerViewSet
from dj_rest_auth.views import LoginView

routers = routers.DefaultRouter()
routers.register('Marker', MarkerView, basename='Marker')
routers.register('Percorso', PercorsoView, basename='Percorso')
routers.register('Direction', DirectionView, basename='Direction')
routers.register(r'Marker', MarkerViewSet, basename='MarkerId')

urlpatterns = [
    path('admin/', admin.site.urls),
    # forse servono gli apici per router.urls ma non ne sono sicuro
    path('api/', include(routers.urls)),
    path('api/dj-rest-auth/', include('dj_rest_auth.urls')),
    path('api/dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('api/dj-rest-auth/login/', LoginView.as_view(), name='rest_login'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# urlpatterns =  router.urls
