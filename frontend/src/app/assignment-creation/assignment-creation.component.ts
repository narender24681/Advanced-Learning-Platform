import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../assignment.service';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-assignment-creation',
  templateUrl: './assignment-creation.component.html',
  styleUrls: ['./assignment-creation.component.css']
})
export class AssignmentCreationComponent implements OnInit {
  newAssignment: any = {
    title: '',
    description: '',
    due_date: null,
    course: null
  };

  courses: any[] = [];

  constructor(
    private assignmentService: AssignmentService,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch courses when the component initializes
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  onSubmit(): void {
    this.assignmentService.createAssignment(this.newAssignment).subscribe(
      () => {
        console.log('Assignment created successfully');
        this.router.navigate(['/assignments']);
      },
      (error) => {
        console.error('Error creating assignment:', error);
      }
    );
  }
}
