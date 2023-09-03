import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmissionService } from '../submission.service';
import { StudentService } from '../student.service';
import { AssignmentService } from '../assignment.service';

@Component({
  selector: 'app-submission-details',
  templateUrl: './submission-details.component.html',
  styleUrls: ['./submission-details.component.css']
})
export class SubmissionDetailsComponent implements OnInit {
  submissionId!: number;
  submission: any = {};

  constructor(
    private submissionService: SubmissionService,
    private assignmentService: AssignmentService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Extract the submission ID from the route parameters
    this.submissionId = +this.route.snapshot.params['id'];

    this.submissionService.getSubmissionById(this.submissionId).subscribe(
      (data: any) => {
        this.submission = data;

        // Fetch assignment details
        this.assignmentService.getAssignmentById(this.submission.assignment).subscribe((assignment: any) => {
          this.submission.assignment = assignment
        })

        // Fetch student details
        this.studentService.getStudentById(this.submission.student).subscribe((student: any) => {
          this.submission.student = student
        })
      },
      (error) => {
        console.error('Error fetching submission details:', error);
      }
    );
  }

  onDelete(): void {
    const confirmation = confirm('Are you sure you want to delete this submission?');

    if (confirmation) {
      this.submissionService.deleteSubmission(this.submission.id).subscribe(
        () => {
          // Submission deleted successfully
          alert('Submission deleted successfully');
          // Redirect to the submission listing page or perform any other necessary action
          this.router.navigate(['/submissions']);
        },
        (error) => {
          // Handle error
          alert('Error deleting submission');
          console.error('Error deleting submission:', error);
          // Handle the error, show an error message, or redirect as needed
        }
      );
    }
  }
}
