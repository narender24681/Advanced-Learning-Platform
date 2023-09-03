import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  private apiUrl = 'http://localhost:8000/api/submissions/'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getSubmissions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getSubmissionById(submissionId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${submissionId}`);
  }
  
  createSubmission(submissionData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, submissionData);
  }

  updateSubmission(submissionId: number, submissionData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${submissionId}/`, submissionData);
  }

  deleteSubmission(submissionId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${submissionId}/`);
  }
}
