from django.shortcuts import render
from .models import Post
from .serializers import PostSerializer
from rest_framework import generics


# Api End view points


class PostListView(generics.ListAPIView):
	queryset = Post.objects.all()
	serializer_class = PostSerializer


class PostListCreateView(generics.CreateAPIView):
	queryset = Post.objects.all()
	serializer_class = PostSerializer


class PostListDetailedView(generics.RetrieveAPIView):
	queryset = Post.objects.all()
	serializer_class = PostSerializer


class PostListUpdateView(generics.UpdateAPIView):
	queryset = Post.objects.all()
	serializer_class = PostSerializer

class PostListDeleteView(generics.DestroyAPIView):
	queryset = Post.objects.all()
	serializer_class = PostSerializer
