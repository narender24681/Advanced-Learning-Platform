import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseId!: number;
  course: any = {};

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = +params['id'];
      this.fetchCourseDetails();
    });
  }

  fetchCourseDetails(): void {
    this.courseService.getCourseById(this.courseId).subscribe(
      (response) => {
        this.course = response;

        // Fetch the department name based on department ID
        this.departmentService.getDepartmentById(this.course.department).subscribe(
          (departmentResponse) => {
            this.course.department = departmentResponse.name;
          },
          (departmentError) => {
            console.error('Error fetching department details:', departmentError);
          }
        );
      },
      (error) => {
        console.error('Error fetching course details:', error);
      }
    );
  }

  onDelete(): void {
    // Display a confirmation dialog to ensure the user wants to delete
    const confirmation = confirm('Are you sure you want to delete this course?');
  
    if (confirmation) {
      // User confirmed deletion, proceed with the deletion logic
      const courseId = this.route.snapshot.paramMap.get('id');
      this.courseService.deleteCourse(this.courseId).subscribe(
        () => {
          // Course deleted successfully
          alert('Course deleted successfully');
          // Redirect to the course listing page or perform any other necessary action
          this.router.navigate(['/courses']);
        },
        (error) => {
          // Handle error
          alert('Error deleting course');
          console.error('Error deleting course:', error);
          // Handle the error, show an error message, or redirect as needed
        }
      );
    }
  }  
}
