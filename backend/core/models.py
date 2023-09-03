from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    student_id = models.CharField(max_length=20, unique=True)
    gender = models.CharField(max_length=10)
    date_of_birth = models.DateField()
    major = models.CharField(max_length=50)
    email = models.EmailField()
    contact_number = models.CharField(max_length=15)

    def __str__(self):
        return self.name



class Instructor(models.Model):
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    date_of_birth = models.DateField()
    department = models.CharField(max_length=100)
    # department = models.ForeignKey('Department', on_delete=models.CASCADE)
    email = models.EmailField()
    contact_number = models.CharField(max_length=15)

    def __str__(self):
        return self.name



class Course(models.Model):
    course_code = models.CharField(max_length=20, unique=True)
    course_name = models.CharField(max_length=200)
    department = models.ForeignKey('Department', on_delete=models.CASCADE)
    credits = models.PositiveIntegerField()
    description = models.TextField()

    def __str__(self):
        return self.course_name



class Enrollment(models.Model):
    student = models.ForeignKey('Student', on_delete=models.CASCADE)
    course = models.ForeignKey('Course', on_delete=models.CASCADE)
    enrollment_date = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return f'{self.student.name} - {self.course.course_name}'



class Assignment(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    due_date = models.DateField()
    course = models.ForeignKey('Course', on_delete=models.CASCADE)

    def __str__(self):
        return self.title



class Submission(models.Model):
    submission_date = models.DateField()
    status = models.CharField(max_length=20)
    remarks = models.TextField()
    assignment = models.ForeignKey('Assignment', on_delete=models.CASCADE)
    student = models.ForeignKey('Student', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.student.name} - {self.assignment.title}'



class Department(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name



class Announcement(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    publish_date = models.DateField()
    course = models.ForeignKey('Course', null=True, on_delete=models.CASCADE)
    department = models.ForeignKey('Department', null=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

