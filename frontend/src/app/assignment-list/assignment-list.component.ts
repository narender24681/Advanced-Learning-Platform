import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { AssignmentService } from '../assignment.service';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {
  assignments: any[] = [];

  constructor(
    private assignmentService: AssignmentService,
    private courseService: CourseService,
  ) {}

  ngOnInit(): void {
    this.fetchAssignments();
  }

  fetchAssignments(): void {
    this.assignmentService.getAssignments().subscribe(
      (response) => {
        this.assignments = response;

        // Fetch course details for each assignment
      this.assignments.forEach((assignment) => {
        // Fetch course details
        this.courseService.getCourseById(assignment.course).subscribe((course: any) => {
          assignment.course = course; // Replace course ID with course object
        });
      });
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }
}
