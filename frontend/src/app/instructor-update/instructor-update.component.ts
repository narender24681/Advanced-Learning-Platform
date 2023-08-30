import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-instructor-update',
  templateUrl: './instructor-update.component.html',
  styleUrls: ['./instructor-update.component.css']
})
export class InstructorUpdateComponent implements OnInit {
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

  updateInstructor(): void {
    this.instructorService.updateInstructor(this.instructor).subscribe(
      () => {
        console.log('Instructor updated successfully');
        this.router.navigate(['/instructors']);
      },
      error => {
        console.error('Error updating instructor:', error);
      }
    );
  }
}
