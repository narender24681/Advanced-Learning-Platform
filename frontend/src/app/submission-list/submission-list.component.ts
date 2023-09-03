import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../submission.service';
import { AssignmentService } from '../assignment.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css']
})
export class SubmissionListComponent implements OnInit {
  submissions: any[] = [];

  constructor(
    private submissionService: SubmissionService,
    private assignmentService: AssignmentService,
    private studentService: StudentService,
  ) {}

  ngOnInit(): void {
    // Fetch submissions from the backend API
    this.submissionService.getSubmissions().subscribe(
      (data: any) => {
        this.submissions = data;

        this.submissions.forEach((submission) => {
          // Fetch assignment details
          this.assignmentService.getAssignmentById(submission.assignment).subscribe((assignment: any) => {
            submission.assignment = assignment
          })

          // Fetch student details
          this.studentService.getStudentById(submission.student).subscribe((student: any) => {
            submission.student = student
          })
        })
      },
      (error) => {
        console.error('Error fetching submissions:', error);
      }
    );
  }
}
