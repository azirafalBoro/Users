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
