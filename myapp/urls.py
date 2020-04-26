from django.urls import path
from . import views
from django.views.generic import TemplateView


urlpatterns = [
    # path('', views.home, name='home'),
     path('', TemplateView.as_view(template_name='index.html')),
    path('api/post/', views.PostListCreate.as_view()),
]
