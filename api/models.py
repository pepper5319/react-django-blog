from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(max_length=500)
    postTime = models.DateTimeField(auto_now_add=True)
    static_id = models.CharField(max_length=6, blank=False, primary_key=True, unique=True)
