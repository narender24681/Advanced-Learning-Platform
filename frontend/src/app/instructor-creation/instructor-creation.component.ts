import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-instructor-creation',
  templateUrl: './instructor-creation.component.html',
  styleUrls: ['./instructor-creation.component.css']
})
export class InstructorCreationComponent {
  instructor: any = {
    name: '',
    gender: '',
    date_of_birth: null,
    department: '',
    email: '',
    contact_number: ''
  };

  constructor(
    private instructorService: InstructorService,
    private router: Router
  ) { }

  onSubmit(): void {
    this.instructorService.createInstructor(this.instructor).subscribe(
      () => {
        console.log(this.instructor)
        console.log('Instructor created successfully');
        this.router.navigate(['/instructors']);
      },
      error => {
        console.error('Error creating instructor:', error);
      }
    );
  }
}
