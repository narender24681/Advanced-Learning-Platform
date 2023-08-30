import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private apiUrl = 'http://localhost:8000/api/instructors/';

  constructor(private http: HttpClient) {}

  getInstructors(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getInstructor(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}`);
  }

  createInstructor(instructor: any): Observable<any> {
    return this.http.post(this.apiUrl, instructor);
  }

  updateInstructor(instructor: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${instructor.id}/`, instructor);
  }

  deleteInstructor(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
