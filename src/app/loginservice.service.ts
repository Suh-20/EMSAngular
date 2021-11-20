import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Login } from './Login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private restUrl: string = 'http://localhost:8080/eventmanagementsystem/customer';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

    getCustomer(): Observable<Login[]> {
      return this.http
        .get<Login[]>(this.restUrl + '/login')
        .pipe(retry(1), catchError(this.handleError));
    }
    handleError(error: any) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Codeeee : ${error.status} \n Error Messageeee : ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
  }