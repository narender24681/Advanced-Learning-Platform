import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  private apiUrl = 'http://localhost:8000/api/assignments/';

  constructor(private http: HttpClient) {}

  getAssignments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAssignmentById(assignmentId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${assignmentId}`);
  }

  createAssignment(assignmentData: any): Observable<any> {
    return this.http.post(this.apiUrl, assignmentData);
  }

  updateAssignment(assignmentId: number, assignmentData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${assignmentId}/`, assignmentData);
  }

  deleteAssignment(assignmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${assignmentId}/`);
  }
}
