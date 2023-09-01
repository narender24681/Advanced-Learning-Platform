import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = 'http://localhost:8000/api/departments/';

  constructor(private http: HttpClient) {}

  // Method to fetch departments from the backend
  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getDepartmentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}`);
  }
}
