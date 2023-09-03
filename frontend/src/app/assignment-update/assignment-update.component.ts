import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from '../assignment.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-assignment-update',
  templateUrl: './assignment-update.component.html',
  styleUrls: ['./assignment-update.component.css']
})
export class AssignmentUpdateComponent implements OnInit {
  updatedAssignment: any = {
    title: '',
    description: '',
    due_date: null,
    course: null
    // Add other assignment fields as needed
  };
  courses: any[] = []; // Populate with available courses

  constructor(
    private route: ActivatedRoute,
    private assignmentService: AssignmentService,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const assignmentIdParam = this.route.snapshot.paramMap.get('id');
    if (assignmentIdParam) {
      const assignmentId = +assignmentIdParam;

      // Fetch the current assignment data based on assignmentId
      this.assignmentService.getAssignmentById(assignmentId).subscribe(
        (data: any) => {
          this.updatedAssignment = data;
        },
        (error) => {
          console.error('Error fetching assignment data:', error);
        }
      );
    }

    // Fetch available courses for dropdown
    this.courseService.getCourses().subscribe((data: any[]) => {
      this.courses = data;
    });
  }

  onSubmit(): void {
    const assignmentParam = this.route.snapshot.paramMap.get('id');

    if (assignmentParam) {
      const assignmentId = +assignmentParam

      // Send a PUT or PATCH request to update the assignment
      this.assignmentService.updateAssignment(assignmentId, this.updatedAssignment).subscribe(
        () => {
          console.log('Assignment updated successfully');
  
          // Redirect to the Assignment Details page with the updated assignment ID
          this.router.navigate(['/assignments', assignmentId]);
        },
        (error) => {
          console.error('Error updating assignment:', error);
        }
      );
    }
  }
}
