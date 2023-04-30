import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { EmployeeInterface } from '../interfaces/IEmployee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmplyeesServiceService {
  httpOptions;
  token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYXZpZG1vbmlyMTciLCJqdGkiOiJjZmQyN2RlNi1iYzU5LTQ0ZmYtYTkzOS1iYzkyMTg0YjMwMmMiLCJlbWFpbCI6ImRhdmlkbW9uaXIxN0BnbWFpbC5jb20iLCJ1aWQiOiJlMWQyOGIyMC0xMjJiLTQxNDctOWQxZi1hMzMzYzU2ODk2YzUiLCJyb2xlcyI6Ik1hbmFnZXIiLCJleHAiOjE2ODU0NDAxMTMsImlzcyI6IlNlY3VyZUFwaSIsImF1ZCI6IlNlY3VyZUFwaVVzZXIifQ.zrA4-bYBoVTRD7gO1ceArqK0LRFFQMSA1MrurXvnVbQ"
  constructor(private httpclient:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };
  }


  getallEmplyees(userId:number):Observable<EmployeeInterface[]>{
    
    return this.httpclient.get<EmployeeInterface[]>(`${environment.apiUrl}/Manager/${userId}`,this.httpOptions)

  }
}
