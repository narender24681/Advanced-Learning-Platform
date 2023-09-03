import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css']
})
export class SubmissionListComponent implements OnInit {
  submissions: any[] = [];

  constructor(
    private submissionService: SubmissionService
  ) {}

  ngOnInit(): void {
    // Fetch submissions from the backend API
    this.submissionService.getSubmissions().subscribe(
      (data: any) => {
        this.submissions = data;

        
      },
      (error) => {
        console.error('Error fetching submissions:', error);
      }
    );
  }
}
