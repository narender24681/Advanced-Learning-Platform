import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-enrollment-creation',
  templateUrl: './enrollment-creation.component.html',
  styleUrls: ['./enrollment-creation.component.css']
})
export class EnrollmentCreationComponent implements OnInit {
  newEnrollment: any = {
    student: null,
    course: null
  };

  students: any[] = [];
  courses: any[] = [];

  constructor(
    private enrollmentService: EnrollmentService,
    private studentService: StudentService,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch students and courses when the component initializes
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });

    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  onSubmit(): void {
    this.enrollmentService.createEnrollment(this.newEnrollment).subscribe(
      () => {
        console.log('Enrollment created successfully');
        this.router.navigate(['/enrollments']);
      },
      (error) => {
        console.error('Error creating enrollment:', error);
      }
    );
  }
}
