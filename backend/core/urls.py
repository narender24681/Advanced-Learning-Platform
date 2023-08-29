from django.urls import path
from .views import InstructorListCreateView, InstructorRetrieveUpdateDeleteView

urlpatterns = [
    path('api/instructors/', InstructorListCreateView.as_view(), name='instructor-list-create'),
    path('api/instructors/<int:pk>/', InstructorRetrieveUpdateDeleteView.as_view(), name='instructor-retrieve-update-delete'),
]
