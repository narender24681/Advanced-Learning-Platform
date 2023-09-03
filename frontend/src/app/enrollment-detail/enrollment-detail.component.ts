import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnrollmentService } from '../enrollment.service';
import { StudentService } from '../student.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-enrollment-detail',
  templateUrl: './enrollment-detail.component.html',
  styleUrls: ['./enrollment-detail.component.css']
})
export class EnrollmentDetailComponent implements OnInit {
  enrollment: any = {};
  enrollmentId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private enrollmentService: EnrollmentService,
    private studentService: StudentService,
    private courseService: CourseService,
  ) {}

  ngOnInit(): void {
    // Extract the enrollment ID from the route parameters
    this.enrollmentId = +this.route.snapshot.params['id'];

    // Fetch the enrollment details based on the ID
    this.enrollmentService.getEnrollmentById(this.enrollmentId).subscribe(
      (data) => {
        this.enrollment = data;

      // Fetch student details
      this.studentService.getStudentById(this.enrollment.student).subscribe((student: any) => {
        this.enrollment.student = student; // Replace student ID with student object
      });

      // Fetch course details
      this.courseService.getCourseById(this.enrollment.course).subscribe((course: any) => {
        this.enrollment.course = course; // Replace course ID with course object
      });
      },
      (error) => {
        console.error('Error fetching enrollment details:', error);
      }
    );
  }

  onDelete(): void {
    const enrollmentId = this.route.snapshot.paramMap.get('id');
    
    if (enrollmentId) {
      const id = +enrollmentId;
      const confirmation = confirm('Are you sure you want to delete this enrollment?');

      if (confirmation) {
        this.enrollmentService.deleteEnrollment(id).subscribe(
          () => {
            alert('Enrollment deleted successfully');
            this.router.navigate(['/enrollments']);
          },
          (error) => {
            console.error('Error deleting enrollment:', error);
            // Handle the error, show an error message, or redirect as needed
          }
        );
      }
    }
  }
}
