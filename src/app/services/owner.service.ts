import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private registerUserUrl = "http://127.0.0.1:8000/owner/new";
  private loginUserUrl = "http://127.0.0.1:8000/login";

  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this.registerUserUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this.loginUserUrl, user);
  }


}
