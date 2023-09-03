import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {
  updatedCourse: any = {
    course_code: '',
    course_name: '',
    department: '',
    credits: 0,
    description: ''
    // Add other course fields as needed
  };

  departments: any[] = []

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const courseIdParam = this.route.snapshot.paramMap.get('id');

    if (courseIdParam) {
      const courseId = +courseIdParam;

      // Fetch the current course data based on courseId
      this.courseService.getCourseById(courseId).subscribe(
        (data: any) => {
          // Populate the updatedCourse object with fetched data
          this.updatedCourse = data;
        },
        (error) => {
          console.error('Error fetching course data:', error);
        }
      );
    }

    // Fetch departments for the dropdown
    this.departmentService.getDepartments().subscribe(
      (data: any) => {
        this.departments = data;
      },
      (error) => {
        console.error('Error fetching departments:', error);
      }
    );
  }


  onSubmit(): void {
    const courseIdParam = this.route.snapshot.paramMap.get('id');

    if (courseIdParam) {
      const courseId = +courseIdParam;
      // Send a PUT or PATCH request to update the course
      this.courseService.updateCourse(courseId, this.updatedCourse).subscribe(
        () => {
          console.log('Course updated successfully');
  
          // Redirect to the Course Details page with the updated course ID
          this.router.navigate(['/courses', courseId]);
        },
        (error) => {
          console.error('Error updating course:', error);
        }
      );
    }
  }
}
