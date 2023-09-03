import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnouncementService } from '../announcement.service';
import { CourseService } from '../course.service';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.css']
})
export class AnnouncementDetailsComponent implements OnInit {
  announcement: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private announcementService: AnnouncementService,
    private courseService: CourseService,
    private departmentService: DepartmentService,
  ) {}

  ngOnInit(): void {
    const announcementParam = this.route.snapshot.paramMap.get('id');

    if (announcementParam) {
      const announcementId = +announcementParam

      this.announcementService.getAnnouncementById(announcementId).subscribe(
        (data: any) => {
          this.announcement = data; // Assign the fetched announcement data to the announcement object

          // Fetch course details
          this.courseService.getCourseById(this.announcement.course).subscribe((course: any) => {
            this.announcement.course = course; // Replace course ID with course object
          });

          // Fetch department details
          this.departmentService.getDepartmentById(this.announcement.department).subscribe((department: any) => {
            this.announcement.department = department; // Replace department ID with course object
          });

        },
        (error) => {
          console.error('Error fetching announcement details:', error);
        }
      );
    }
  }

  onDelete(): void {
    const announcementIdParam = this.route.snapshot.paramMap.get('id');
    
    if (announcementIdParam) {
      const announcementId = +announcementIdParam; 

      const confirmation = confirm('Are you sure you want to delete this announcement?');
    
      if (confirmation) {
        this.announcementService.deleteAnnouncement(announcementId).subscribe(
          () => {
            alert('Announcement deleted successfully');
            // Redirect to the announcement listing page or perform any other necessary action
            this.router.navigate(['/announcements']);
          },
          (error) => {
            alert('Error deleting announcement');
            console.error('Error deleting announcement:', error);
            // Handle the error, show an error message, or redirect as needed
          }
        );
      }
    }
  }  
}
