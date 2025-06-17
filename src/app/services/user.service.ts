import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UserData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDataSource = new BehaviorSubject<UserData>({ email: '', password: '' });
  currentUserData = this.userDataSource.asObservable();

  constructor() {}

  changeData(newUserData: UserData) {
    this.userDataSource.next(newUserData);
  }
}