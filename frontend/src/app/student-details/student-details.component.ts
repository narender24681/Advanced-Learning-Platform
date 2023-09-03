import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student: any = {};
  studentId!: number;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the student ID from the route parameter
    this.studentId = +this.route.snapshot.params['id'];

    // Fetch the student's details from the backend API
    this.studentService.getStudentById(this.studentId).subscribe(
      (response) => {
        // Assign the fetched data to the 'student' object
        this.student = response;
      },
      (error) => {
        console.error('Error fetching student details:', error);
      }
    );
  }

  onDelete(): void {
    const studentIdParam = this.route.snapshot.paramMap.get('id');

    if (studentIdParam) {
      const studentId = +studentIdParam;
      
      // Display a confirmation dialog
      const confirmation = confirm('Are you sure you want to delete this student?');

      if (confirmation) {
        // User confirmed deletion, proceed with the deletion logic
        this.studentService.deleteStudent(studentId).subscribe(
          () => {
            // Student deleted successfully
            alert('Student deleted successfully');
            // Redirect to the student listing page or perform any other necessary action
            this.router.navigate(['/students']);
          },
          (error) => {
            // Handle error
            alert('Error deleting student');
            console.error('Error deleting student:', error);
            // Handle the error, show an error message, or redirect as needed
          }
        );
      }
    }
  }
}
