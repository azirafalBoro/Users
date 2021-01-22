import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {Observable, throwError} from 'rxjs/index';
import {User} from './models/user';

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
    return this.http.get<User[]>(this.baseUrl).pipe(
      catchError(this.handleError)
    );
  }

  getUserId(id: string): Observable<SearchMovie> {
    return this.http.get<SearchMovie>(this.baseUrl + '/' + id).pipe(
      catchError(this.handleError)
    );
  }

  getUserPosts(id: string): Observable<SearchMovie> {
    return this.http.get<SearchMovie>(this.baseUrl + '/' + id + '/posts').pipe(
      catchError(this.handleError)
    );
  }

  // getMoviesByTitleNextPage(title: string, page: string): Observable<SearchMovie> {
  //   return this.http.get<SearchMovie>(this.baseUrl + 's=' + title + '&page=' + page).pipe(
  //     catchError(this.handleError)
  //   );
  // }
  //
  // getMoviesByTitleAndYear(title: string, year: string): Observable<SearchMovie> {
  //   return this.http.get<SearchMovie>(this.baseUrl + 's=' + title + '&y=' + year).pipe(
  //     catchError(this.handleError)
  //   );
  // }
  //
  // getMoviesByTitleAndYearNextPage(title: string, year: string, page: string): Observable<SearchMovie> {
  //   return this.http.get<SearchMovie>(this.baseUrl + 's=' + title + '&y=' + year + '&page=' + page).pipe(
  //     catchError(this.handleError)
  //   );
  // }
  //
  // getMovieById(id: string): Observable<movieDetails> {
  //   return this.http.get<any>(this.baseUrl + 'i=' + id).pipe(
  //     catchError(this.handleError)
  //   );
  // }
}
