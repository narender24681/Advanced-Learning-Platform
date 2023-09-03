import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiUrl = 'http://localhost:8000/api/enrollments/';

  constructor(private http: HttpClient) {}

  getEnrollments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEnrollmentById(enrollmentId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${enrollmentId}`);
  }

  createEnrollment(enrollmentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, enrollmentData);
  }

  updateEnrollment(enrollmentId: number, enrollmentData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${enrollmentId}/`, enrollmentData);
  }

  deleteEnrollment(enrollmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${enrollmentId}/`);
  }
}
