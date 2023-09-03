import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from '../assignment.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent {
  assignment: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assignmentService: AssignmentService,
    private courseService: CourseService,
  ) {}

  ngOnInit(): void {
    // Extract the assignment ID from the route parameters
    const assignmentId = +this.route.snapshot.params['id'];

    // Fetch the assignment details based on the ID
    this.assignmentService.getAssignmentById(assignmentId).subscribe(
      (data) => {
        this.assignment = data;

        // Fetch course details
        this.courseService.getCourseById(this.assignment.course).subscribe((course: any) => {
          this.assignment.course = course; // Replace course ID with course object
        });
      },
      (error) => {
        console.error('Error fetching assignment details:', error);
      }
    );
  }

  onDelete(): void {
    const assignmentId = this.route.snapshot.paramMap.get('id');
    
    if (assignmentId) {
      const id = +assignmentId;
      const confirmation = confirm('Are you sure you want to delete this assignment?');

      if (confirmation) {
        this.assignmentService.deleteAssignment(id).subscribe(
          () => {
            alert('Assignment deleted successfully');
            this.router.navigate(['/assignments']);
          },
          (error) => {
            console.error('Error deleting assignment:', error);
            // Handle the error, show an error message, or redirect as needed
          }
        );
      }
    }
  }
}
