
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework import routers
from Api.views import MarkerView, PercorsoView, DirectionView, MarkerViewSet
from dj_rest_auth.views import LoginView
from Api import views
#from Api.views import UserDetail, UserDetailsView
#from rest_framework_simplejwt.views import (
 #   TokenObtainPairView,
  #  TokenRefreshView,
#)

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


routers = routers.DefaultRouter()
routers.register('Marker', MarkerView, basename='Marker')
routers.register('Percorso', PercorsoView, basename='Percorso')
routers.register('Direction', DirectionView, basename='Direction')
routers.register(r'Marker', MarkerViewSet, basename='MarkerId')             # Update

urlpatterns = [
    path('admin/', admin.site.urls),
    # forse servono gli apici per router.urls ma non ne sono sicuro
    path('api/', include(routers.urls)),
    path('api/dj-rest-auth/', include('dj_rest_auth.urls')),
    path('api/dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('api/dj-rest-auth/login/', LoginView.as_view(), name='rest_login'),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test'),
    #path('api/user-details/', UserDetailsView.as_view(), name='user-details'),
    #path('user/', UserDetail.as_view()),
    #path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    #path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# urlpatterns =  router.urls
