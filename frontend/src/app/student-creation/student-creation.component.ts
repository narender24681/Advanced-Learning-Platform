import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-creation',
  templateUrl: './student-creation.component.html',
  styleUrls: ['./student-creation.component.css']
})
export class StudentCreationComponent {
  newStudent: any = {
    name: '',
    student_id: '',
    gender: '',
    date_of_birth: null,
    major: '',
    email: '',
    contact_number: ''
    // Add other student fields as needed
  };

  constructor(private studentService: StudentService, private router: Router) {}

  onSubmit(): void {
    // Call your StudentService's method to create a new student
    this.studentService.createStudent(this.newStudent).subscribe(
      () => {
        console.log('Student created successfully');
        // Redirect to the student listing page or any other necessary action
        this.router.navigate(['/students']);
      },
      (error) => {
        console.error('Error creating student:', error);
        // Handle the error, show an error message, or redirect as needed
      }
    );
  }  
}
