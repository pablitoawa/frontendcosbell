import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface UserData {
  email: string;
  password: string;
}

const API_URL = 'http://localhost:8081/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDataSource = new BehaviorSubject<UserData>({ email: '', password: '' });
  currentUserData = this.userDataSource.asObservable();

  constructor(private http: HttpClient) {}

  changeData(newUserData: UserData) {
    this.userDataSource.next(newUserData);
  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}/employees`);
  }
}