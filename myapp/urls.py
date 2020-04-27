from django.urls import path
from . import views
from django.views.generic import TemplateView


urlpatterns = [
    # path('', views.home, name='home'),
     path('', TemplateView.as_view(template_name='index.html')),
    path('api/post/', views.PostListView.as_view()),
    path('api/post/create/', views.PostListCreateView.as_view()),
    path('api/post/<pk>', views.PostListDetailedView.as_view()),
    path('api/post/<pk>/update/', views.PostListUpdateView.as_view()),
    path('api/post/<pk>/delete/', views.PostListDeleteView.as_view()),
    
]
