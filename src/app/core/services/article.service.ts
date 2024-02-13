import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  LoginPayload,
  LoginResponse,
  UserData,
} from '../pages/login-page/login.model';
import { ArticleGetPayload } from '../models/article.model';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  userData: UserData;

  constructor(private http: HttpClient) {}

  loadUserData() {
    const userDataToParse = sessionStorage.getItem('userData');
    if (typeof userDataToParse === 'string') {
      this.userData = JSON.parse(userDataToParse);
    }
  }

  createArticle(payload: LoginPayload): Observable<any> {
    this.loadUserData();
    return this.http.post<LoginResponse>(
      `
      http://localhost:8000/api/article/`,
      payload,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${this.userData.access_token}`,
          user_id: `${this.userData.user}`,
        }),
      }
    );
  }

  // http://localhost:8000/api/article/?title=sa &page=1&offset=10

  getArticles(
    page: number = 1,
    offset: number = 10,
    title: string = ''
  ): Observable<ArticleGetPayload> {
    this.loadUserData();
    return this.http.get<ArticleGetPayload>(
      `
      http://localhost:8000/api/article?page=${page}&offset=${offset}&title=${title}`,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${this.userData.access_token}`,
        }),
      }
    );
  }

  register(payload: any) {
    return this.http.post('http://localhost:8000/api/auth/login', payload);
  }
}
