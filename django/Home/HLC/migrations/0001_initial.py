# Generated by Django 5.0.6 on 2024-06-13 10:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Userdetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=250)),
                ('fname', models.CharField(max_length=250)),
                ('lname', models.CharField(max_length=250)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=250)),
                ('confirmpassword', models.CharField(max_length=250)),
            ],
            options={
                'db_table': 'userdetails',
            },
        ),
    ]