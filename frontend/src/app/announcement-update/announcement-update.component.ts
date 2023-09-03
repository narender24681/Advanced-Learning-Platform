import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnouncementService } from '../announcement.service';
import { DepartmentService } from '../department.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-announcement-update',
  templateUrl: './announcement-update.component.html',
  styleUrls: ['./announcement-update.component.css']
})
export class AnnouncementUpdateComponent implements OnInit {
  updatedAnnouncement: any = {
    title: '',
    description: '',
    publish_date: '',
    department: '',
    course: ''
  };
  departments: any[] = []; // Populate this array with departments data
  courses: any[] = []; // Populate this array with courses data

  constructor(
    private route: ActivatedRoute,
    private announcementService: AnnouncementService,
    private departmentService: DepartmentService,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const announcementIdParam = this.route.snapshot.paramMap.get('id');

    if (announcementIdParam) {
      const announcementId = +announcementIdParam

      // Fetch the current announcement data based on announcementId
      this.announcementService.getAnnouncementById(announcementId).subscribe(
        (data: any) => {
          // Populate the updatedAnnouncement object with fetched data
          this.updatedAnnouncement = data;
        },
        (error) => {
          console.error('Error fetching announcement data:', error);
        }
      );

      // Fetch departments
    this.departmentService.getDepartments().subscribe(
      (data) => {
        this.departments = data;
      },
      (error) => {
        console.error('Error fetching departments:', error);
      }
    );

    // Fetch courses
    this.courseService.getCourses().subscribe(
      (data) => {
        this.courses = data;
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
    }
  }

  onSubmit(): void {
    const announcementIdParam = this.route.snapshot.paramMap.get('id');

    if (announcementIdParam) {
      const announcementId = +announcementIdParam

      // Send a PUT or PATCH request to update the announcement
      this.announcementService.updateAnnouncement(announcementId, this.updatedAnnouncement).subscribe(
        () => {
          console.log('Announcement updated successfully');

          // Redirect to the Announcement Details page with the updated announcement ID
          this.router.navigate(['/announcements', announcementId]);
        },
        (error) => {
          console.error('Error updating announcement:', error);
        }
      );
    }
  }
}
