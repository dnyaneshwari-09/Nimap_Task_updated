import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userProfile: any = {};  

  constructor(private http: HttpClient) { }

  submitRegistration(userData: any): Observable<any> {
    return this.http.post('http://localhost:3000/users', userData);
  }

  getUserProfile(): any {
    return this.userProfile;  
  }

  setUserProfile(userData: any): void {
    this.userProfile = userData;  
  }
}
