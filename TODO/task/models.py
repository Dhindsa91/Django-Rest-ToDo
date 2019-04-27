from django.db import models

# Create your models here.

class task(models.Model):

    id = models.AutoField(primary_key=True)
    state = models.CharField(max_length=100)
    dueDate = models.DateTimeField(auto_now_add=True, blank=True)
    text = models.TextField()

    
  