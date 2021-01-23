import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {User} from '../models/user';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class ServerJsonService {
  baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        'Backend returned code ${error.status}, ' +
        'body was: ${error.error}');
    }

    return throwError(
      'Something bad happened; please try again later.');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserId(id: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  getUserPosts(id: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + '/' + id + '/posts');
  }
}
