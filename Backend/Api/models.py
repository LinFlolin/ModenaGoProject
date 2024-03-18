from django.db import models
#from django.contrib.auth.models import AbstractUser, Group, Permission
from django.utils.translation import gettext as _
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser, Group, Permission


class User(AbstractUser):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    # Add related_name arguments to resolve the clash
    groups = models.ManyToManyField(
        Group,
        verbose_name=_('groups'),
        blank=True,
        help_text=_(
            'The groups this user belongs to. A user will get all permissions '
            'granted to each of their groups.'
        ),
        related_name="custom_user_groups", # Unique related_name
        related_query_name="custom_user",
    )

    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_('user permissions'),
        blank=True,
        help_text=_('Specific permissions for this user.'),
        related_name="custom_user_permissions", # Unique related_name
        related_query_name="custom_user",
    )

    def profile(self):
        profile = Profile.objects.get(user=self)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=1000)
    #bio = models.CharField(max_length=100)
    #image = models.ImageField(upload_to="user_images", default="default.jpg")
    verified = models.BooleanField(default=False)


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)


'''
class CustomUser(AbstractUser):
    # Altri campi personalizzati se necessario

    # Aggiungi related_name unici per evitare collisioni
    groups = models.ManyToManyField(Group, related_name='custom_user_groups')
    user_permissions = models.ManyToManyField(Permission, related_name='custom_user_permissions')
'''


class Marker (models.Model):
    Nome = models.CharField(max_length=255)
    Indirizzo = models.CharField(max_length=255)
    Descrizione = models.TextField(max_length=3000)
    Desbrev = models.TextField(max_length=500, default="")
    Contatti = models.TextField(max_length=300, default="")
    Orari = models.TextField(max_length=1000, default="")
    Costi = models.TextField(max_length=500, default="")
    Latitudine = models.CharField(max_length=255)
    Longitudine = models.CharField(max_length=255)
    Sfida = models.TextField(max_length=300)
    Immagine = models.ImageField(null=True, blank=True, upload_to="images/")

    def __str__(self):
        return self.Nome

class Percorso(models.Model):
    Titolo = models.CharField(max_length=255)
    def __str__(self):
        return self.Titolo

class Direction(models.Model):
    UserLat = models.CharField(max_length=255)
    UserLong = models.CharField(max_length=255)

