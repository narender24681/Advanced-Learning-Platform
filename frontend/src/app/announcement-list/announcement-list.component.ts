import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement.service';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent implements OnInit {
  announcements: any[] = [];

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    // Fetch announcements from the service
    this.announcementService.getAnnouncements().subscribe(
      (data: any) => {
        this.announcements = data;
      },
      (error) => {
        console.error('Error fetching announcements:', error);
      }
    );
  }
}
