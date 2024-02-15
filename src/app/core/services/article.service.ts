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
    title: string = '',
    sort: string = 'dateAsc',
    tags: string[] = [],
    page: number = 1,
    offset: number = 10
  ): Observable<ArticleGetPayload> {
    this.loadUserData();
    let tagsString = '';
    tags.forEach((tag) => {
      tagsString += `&tags=${tag}`;
    });
    return this.http.get<ArticleGetPayload>(
      `
      http://localhost:8000/api/article?page=${page}&offset=${offset}&sort=${sort}${tagsString}&title=${title}`,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${this.userData.access_token}`,
        }),
      }
    );
  }

  deleteArticleById(id: string) {
    this.loadUserData();
    return this.http.delete(
      `
    http://localhost:8000/api/article?article_id=${id}`,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${this.userData.access_token}`,
        }),
      }
    );
  }

  getAllArticlesByAuthor(authorId: string) {
    this.loadUserData();

    return this.http.get<ArticleGetPayload>(
      `
      http://localhost:8000/api/article?author_id=${authorId}`,
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
