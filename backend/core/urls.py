from django.urls import path
from . import views

urlpatterns = [
    path('instructors/', views.InstructorListCreateView.as_view(), name='instructor-list-create'),
    path('instructors/<int:pk>/', views.InstructorRetrieveUpdateDeleteView.as_view(), name='instructor-retrieve-update-delete'),
    path('courses/', views.CourseListCreateView.as_view(), name='course-list-create'),
    path('courses/<int:pk>/', views.CourseRetrieveUpdateDestroyView.as_view(), name='course-retrieve-update-destroy'),
    path('departments/', views.DepartmentList.as_view(), name='department-list'),
    path('departments/<int:pk>/', views.DepartmentDetail.as_view(), name='department-detail'),
    path('students/', views.StudentListCreateView.as_view(), name='student-list-create'),
    path('students/<int:pk>/', views.StudentDetailView.as_view(), name='student-detail'),
    path('enrollments/', views.EnrollmentListCreateView.as_view(), name='enrollment-list-create'),
    path('enrollments/<int:pk>/', views.EnrollmentDetailView.as_view(), name='enrollment-detail'),
    path('assignments/', views.AssignmentListCreateView.as_view(), name='assignment-list-create'),
    path('assignments/<int:pk>/', views.AssignmentDetailView.as_view(), name='assignment-detail'),
    path('submissions/', views.SubmissionListCreateView.as_view(), name='submission-list-create'),
    path('submissions/<int:pk>/', views.SubmissionDetailView.as_view(), name='submission-detail'),
    path('announcements/', views.AnnouncementList.as_view(), name='announcement-list'),
    path('announcements/<int:pk>/', views.AnnouncementDetail.as_view(), name='announcement-detail'),
]
