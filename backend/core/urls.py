from django.urls import path
from . import views

urlpatterns = [
    path('api/instructors/', views.InstructorListCreateView.as_view(), name='instructor-list-create'),
    path('api/instructors/<int:pk>/', views.InstructorRetrieveUpdateDeleteView.as_view(), name='instructor-retrieve-update-delete'),
    path('api/courses/', views.CourseListCreateView.as_view(), name='course-list-create'),
    path('api/courses/<int:pk>/', views.CourseRetrieveUpdateDestroyView.as_view(), name='course-retrieve-update-destroy'),
    path('api/departments/', views.DepartmentList.as_view(), name='department-list'),
    path('api/departments/<int:pk>/', views.DepartmentDetail.as_view(), name='department-detail'),
]
