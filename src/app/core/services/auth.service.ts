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
  //   login(payload: { user_name: string; password: string }) {
  //     return this.http.post(`/auth/login`, payload, {
  //       withCredentials: true,
  //     });
  //   }

  register(payload: registerPayload) {
    return this.http.post('http://localhost:8000/api/auth/signup', payload);
  }

  //   addPost(title: string, content: string) {
  //     return this.http.post(
  //       '/api/posts/create',
  //       {
  //         title,
  //         content,
  //       },
  //       { withCredentials: true }
  //     );
  //   }

  //   getAllPosts() {
  //     return this.http.get('/api/posts/all');
  //   }

  //   getMyPosts() {
  //     return this.http.get('/api/posts');
  //   }

  //   removePost(id: string) {
  //     return this.http.get(`/api/posts/${id}/delete`);
  //   }

  //   getPostDetails(id: number) {
  //     return this.http.get(`/api/posts/${id}/one`);
  //   }

  //   changePassword(password: string, new_password: string) {
  //     return this.http.post('/api/users/change-password', {
  //       password,
  //       new_password,
  //     });
  //   }

  //   updateProfile(
  //     new_telephone: string,
  //     new_birth_year: string,
  //     new_place: string
  //   ) {
  //     return this.http.post('/api/users/update-account', {
  //       new_telephone,
  //       new_birth_year,
  //       new_place,
  //     });
  //   }
}
