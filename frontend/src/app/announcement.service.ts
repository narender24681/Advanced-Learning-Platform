import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private apiUrl = 'http://localhost:8000/api/announcements/';

  constructor(private http: HttpClient) { }

  // Fetch all announcements
  getAnnouncements(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Fetch a single announcement by ID
  getAnnouncementById(id: number): Observable<any> {
    const url = `${this.apiUrl}${id}`;
    return this.http.get<any>(url);
  }

  // Create a new announcement
  createAnnouncement(announcement: any): Observable<any> {
    return this.http.post(this.apiUrl, announcement);
  }

  // Update an existing announcement
  updateAnnouncement(id: number, announcement: any): Observable<any> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.put(url, announcement);
  }

  // Delete an announcement by ID
  deleteAnnouncement(id: number): Observable<any> {
    const url = `${this.apiUrl}${id}`;
    return this.http.delete(url);
  }
}
