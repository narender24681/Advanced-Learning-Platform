import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent {
  studentId!: number;
  updatedStudent: any = {
    name: '',
    student_id: '',
    gender: '',
    date_of_birth: null,
    major: '',
    email: '',
    contact_number: ''
    // Add other student fields as needed
  };

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.studentId = +params['id'];
      this.fetchStudentDetails();
    });
  }

  fetchStudentDetails(): void {
    // Use your StudentService or HTTP client to fetch student data by ID
    this.studentService.getStudentById(this.studentId).subscribe(
      (data: any) => {
        // Populate the updatedStudent object with fetched data
        this.updatedStudent = data;
      },
      (error) => {
        console.error('Error fetching student data:', error);
      }
    );
  }

  onSubmit(): void {
    // Use your StudentService or HTTP client to send a PUT request to update the student
    this.studentService.updateStudent(this.studentId, this.updatedStudent).subscribe(
      () => {
        console.log('Student updated successfully');
        // Redirect to the Student Details page with the updated student ID
        this.router.navigate(['/students', this.studentId]);
      },
      (error) => {
        console.error('Error updating student:', error);
      }
    );
  }
}
