import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private getAllClubsUrl = "http://127.0.0.1:8000/club/getAll?authorization=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQGdtYWlsLmNvbSIsImZpcnN0X25hbWUiOiJmb3VsZW4iLCJsYXN0X25hbWUiOiJiZW5fZm91bGVuZSIsImlhdCI6MTU5NTAwMDU3OCwiZXhwIjoxNTk1NjA1Mzc4fQ.N8UpUb8vCoORKQX1tdZHHMVzBEJsTWCu9P4WyXJoqI0";

  constructor(private http: HttpClient) { }

  getAllClubs() {
    return this.http.post<any>(this.getAllClubsUrl,null);
  }

}
