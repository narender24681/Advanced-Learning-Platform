import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:8000/api/students/';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getStudentById(studentId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${studentId}`);
  }

  createStudent(studentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, studentData);
  }

  updateStudent(studentId: number, updatedStudent: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${studentId}/`, updatedStudent);
  }

  deleteStudent(studentId: number) {
    return this.http.delete(`${this.apiUrl}${studentId}`);
  }
}
