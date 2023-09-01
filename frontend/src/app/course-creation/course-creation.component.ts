import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-course-creation',
  templateUrl: './course-creation.component.html',
  styleUrls: ['./course-creation.component.css']
})
export class CourseCreationComponent {
newCourse: any = {
    course_code: '',
    course_name: '',
    department: '',
    credits: 0, // Set an initial value for credits, you can change it as needed
    description: ''
    // Add other course fields as needed
  };

  departments: any[] = [];

  constructor(
    private courseService: CourseService,
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch departments from the backend
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
    this.courseService.createCourse(this.newCourse).subscribe(
      () => {
        console.log('Course created successfully');
        this.router.navigate(['/courses']);
      },
      (error) => {
        console.error('Error creating course:', error);
      }
    );
  }
}
