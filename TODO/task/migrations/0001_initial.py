# Generated by Django 2.2 on 2019-04-23 07:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('state', models.CharField(max_length=100)),
                ('dueDate', models.DateTimeField()),
                ('text', models.TextField()),
            ],
        ),
    ]
