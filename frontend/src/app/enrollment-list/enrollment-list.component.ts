import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { StudentService } from '../student.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListComponent implements OnInit {
  enrollments: any[] = [];

  constructor(
    private enrollmentService: EnrollmentService,
    private studentService: StudentService,
    private courseService: CourseService,
  ) {}

  ngOnInit(): void {
    this.fetchEnrollments();
  }

  fetchEnrollments(): void {
    this.enrollmentService.getEnrollments().subscribe(
      (response) => {
        this.enrollments = response;

        // Fetch student and course details for each enrollment
      this.enrollments.forEach((enrollment) => {
        // Fetch student details
        this.studentService.getStudentById(enrollment.student).subscribe((student: any) => {
          enrollment.student = student; // Replace student ID with student object
        });

        // Fetch course details
        this.courseService.getCourseById(enrollment.course).subscribe((course: any) => {
          enrollment.course = course; // Replace course ID with course object
        });
      });
      },
      (error) => {
        console.error('Error fetching enrollments:', error);
      }
    )
  }
}
