import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginPayload, LoginResponse } from '../pages/login-page/login.model';
import { registerPayload } from '../pages/register-page/register.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(payload: LoginPayload): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `
    http://localhost:8000/api/auth/login`,
      payload,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
        }),
      }
    );
  }

  register(payload: registerPayload) {
    return this.http.post('http://localhost:8000/api/auth/signup', payload);
  }

  isAuthenticatedUser() {
    const userDataToParse = sessionStorage.getItem('userData');
    if (typeof userDataToParse === 'string') {
      const userData = JSON.parse(userDataToParse);
      if (userData.access_token) return true;
    }
    return false;
  }

  getUserId() {
    const userDataToParse = sessionStorage.getItem('userData');
    const userData = JSON.parse(userDataToParse as string);
    return userData.user;
  }

  isCreator() {
    const userDataToParse = sessionStorage.getItem('userData');
    if (typeof userDataToParse === 'string') {
      const userData = JSON.parse(userDataToParse);
      if (userData.user_type === 'creator') return true;
    }
    return false;
  }
}
