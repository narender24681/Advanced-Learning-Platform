import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.css']
})
export class InstructorDetailsComponent implements OnInit {
  instructor: any = {};

  constructor(
    private route: ActivatedRoute,
    private instructorService: InstructorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const instructorId = this.route.snapshot.paramMap.get('id');
    if (instructorId) {
      this.fetchInstructorDetails(instructorId);
    }
  }

  fetchInstructorDetails(id: string): void {
    this.instructorService.getInstructor(id).subscribe(
      instructor => {
        this.instructor = instructor;
      },
      error => {
        console.error('Error fetching instructor details:', error);
      }
    );
  }

  deleteInstructor(): void {
    if (confirm('Are you sure you want to delete this instructor?')) {
      this.instructorService.deleteInstructor(this.instructor.id).subscribe(
        () => {
          console.log('Instructor deleted successfully');
          this.router.navigate(['/instructors']);
        },
        error => {
          console.error('Error deleting instructor:', error);
        }
      );
    }
  }
}
