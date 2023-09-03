import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnouncementService } from '../announcement.service';
import { DepartmentService } from '../department.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-announcement-creation',
  templateUrl: './announcement-creation.component.html',
  styleUrls: ['./announcement-creation.component.css']
})
export class AnnouncementCreationComponent implements OnInit {
  newAnnouncement: any = {
    title: '',
    description: '',
    publish_date: '',
    course: null,
    department: null
  };

  departments: any[] = [];
  courses: any[] = [];

  constructor(
    private announcementService: AnnouncementService,
    private departmentService: DepartmentService,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch departments
    this.departmentService.getDepartments().subscribe(
      (data: any) => {
        this.departments = data;
      },
      (error) => {
        console.error('Error fetching departments:', error);
      }
    );

    // Fetch courses
    this.courseService.getCourses().subscribe(
      (data: any) => {
        this.courses = data;
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  onSubmit(): void {
    this.announcementService.createAnnouncement(this.newAnnouncement).subscribe(
      () => {
        console.log('Announcement created successfully');
        this.router.navigate(['/announcements']);
      },
      (error) => {
        console.error('Error creating announcement:', error);
      }
    );
  }
}
