import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const API_URL = 'http://localhost:8081/api/auth';

interface AuthResponse {
  token: string;
  role: string;
  userId: number;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API_URL}/register`, data).pipe(
      tap(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.role);
          localStorage.setItem('userId', res.userId.toString());
        }
      })
    );
  }

  login(data: { email: string, password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API_URL}/login`, data).pipe(
      tap(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.role);
          localStorage.setItem('userId', res.userId.toString());
        }
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  getUserId(): number | null {
    const userId = localStorage.getItem('userId');
    return userId ? parseInt(userId, 10) : null;
  }
}

/*login(email: string, password: string) {
  return this.http.post<{message: string, token: string, role: string}>('/auth/login', { email, password });
}

register(data: any) {
  return this.http.post<{message: string}>('/auth/register', data);
}*/