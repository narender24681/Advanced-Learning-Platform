import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnrollmentService } from '../enrollment.service';
import { StudentService } from '../student.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-enrollment-update',
  templateUrl: './enrollment-update.component.html',
  styleUrls: ['./enrollment-update.component.css']
})
export class EnrollmentUpdateComponent implements OnInit {
  updatedEnrollment: any = {
    student: null,
    course: null
    // Add other enrollment fields as needed
  };
  students: any[] = []; // Populate with available students
  courses: any[] = []; // Populate with available courses

  constructor(
    private route: ActivatedRoute,
    private enrollmentService: EnrollmentService,
    private studentService: StudentService,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const enrollmentIdParam = this.route.snapshot.paramMap.get('id');
    if (enrollmentIdParam) {
      const enrollmentId = +enrollmentIdParam;

      // Fetch the current enrollment data based on enrollmentId
      this.enrollmentService.getEnrollmentById(enrollmentId).subscribe(
        (data: any) => {
          this.updatedEnrollment = data;
        },
        (error) => {
          console.error('Error fetching enrollment data:', error);
        }
      );
    }

    // Fetch available students and courses for dropdowns
    this.studentService.getStudents().subscribe((data: any[]) => {
      this.students = data;
    });

    this.courseService.getCourses().subscribe((data: any[]) => {
      this.courses = data;
    });
  }

  onSubmit(): void {
    const courseIdParam = this.route.snapshot.paramMap.get('id');

    if (courseIdParam) {
      const enrollmentId = +courseIdParam

      // Send a PUT or PATCH request to update the enrollment
      this.enrollmentService.updateEnrollment(enrollmentId, this.updatedEnrollment).subscribe(
        () => {
          console.log('Enrollment updated successfully');
  
          // Redirect to the Enrollment Details page with the updated enrollment ID
          this.router.navigate(['/enrollments', enrollmentId]);
        },
        (error) => {
          console.error('Error updating enrollment:', error);
        }
      );
    }
  }
}
