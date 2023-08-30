import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-instructor-listing',
  templateUrl: './instructor-listing.component.html',
  styleUrls: ['./instructor-listing.component.css']
})
export class InstructorListingComponent implements OnInit {
  instructors: any[] = [];

  constructor(private instructorService: InstructorService) { }

  ngOnInit(): void {
    this.fetchInstructors();
  }

  fetchInstructors(): void {
    this.instructorService.getInstructors().subscribe(
      instructors => {
        this.instructors = instructors;
      },
      error => {
        console.error('Error fetching instructors:', error);
      }
    );
  }
}
