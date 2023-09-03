import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmissionService } from '../submission.service';
import { AssignmentService } from '../assignment.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-submission-update',
  templateUrl: './submission-update.component.html',
  styleUrls: ['./submission-update.component.css']
})
export class SubmissionUpdateComponent implements OnInit {
  updatedSubmission: any = {
    submission_date: null,
    status: '',
    remarks: '',
    assignment: null,
    student: null
  };

  assignmentList: any[] = [];
  studentList: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private submissionService: SubmissionService,
    private assignmentService: AssignmentService,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const submissionIdParam = this.route.snapshot.paramMap.get('id');
    
    if (submissionIdParam) {
      const submissionId = +submissionIdParam

      if (submissionId) {
        this.submissionService.getSubmissionById(submissionId).subscribe(
          (data: any) => {
            this.updatedSubmission = data;
          },
          (error) => {
            console.error('Error fetching submission data:', error);
          }
        );
      }
    }

    // Fetch assignments
  this.assignmentService.getAssignments().subscribe(
    (data: any) => {
      this.assignmentList = data;
    },
    (error) => {
      console.error('Error fetching assignments:', error);
    }
  );

  // Fetch students
  this.studentService.getStudents().subscribe(
    (data: any) => {
      this.studentList = data;
    },
    (error) => {
      console.error('Error fetching students:', error);
    }
  );
  }

  onUpdate(): void {
    const submissionIdParam = this.route.snapshot.paramMap.get('id');
    
    if (submissionIdParam) {
      const submissionId = +submissionIdParam

      this.submissionService.updateSubmission(submissionId, this.updatedSubmission).subscribe(
        () => {
          console.log('Submission updated successfully');
          this.router.navigate(['/submissions']);
        },
        (error) => {
          console.error('Error updating submission:', error);
        }
      );
    }
  }
}
