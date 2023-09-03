import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentService } from '../assignment.service';
import { StudentService } from '../student.service';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-submission-creation',
  templateUrl: './submission-creation.component.html',
  styleUrls: ['./submission-creation.component.css']
})
export class SubmissionCreationComponent implements OnInit {
  newSubmission: any = {
    submission_date: '',
    status: '',
    remarks: '',
    assignment: '',
    student: '',
  };

  assignments: any[] = [];
  students: any[] = [];

  constructor(
    private assignmentService: AssignmentService,
    private studentService: StudentService,
    private submissionService: SubmissionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch assignments
    this.assignmentService.getAssignments().subscribe((data) => {
      this.assignments = data;
    });

    // Fetch students
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  onSubmit(): void {
    // Ensure that assignment and student are numbers
    this.newSubmission.assignment = +this.newSubmission.assignment;
    this.newSubmission.student = +this.newSubmission.student;

    // Create the submission
    this.submissionService.createSubmission(this.newSubmission).subscribe(
      () => {
        console.log('Submission created successfully');
        this.router.navigate(['/submissions']);
      },
      (error) => {
        console.error('Error creating submission:', error);
      }
    );
  }
}
