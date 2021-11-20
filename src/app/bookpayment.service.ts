import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Bookpayment } from './Bookpayment';


@Injectable({
  providedIn: 'root'
})
export class BookpaymentService {
 
    
  private restUrl: string = 'http://localhost:8080/eventmanagementsystem/';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getBookpaymentFromService(): Observable<Bookpayment[]> {
    return this.http
      .get<Bookpayment[]>(this.restUrl + '/allemp')
      .pipe(retry(1), catchError(this.handleError));
  }
  createBookpayment(bookpayment: any): Observable<Bookpayment> {
    return this.http
      .post<Bookpayment>(
        this.restUrl + '/createEmployee',
        JSON.stringify(bookpayment),
        this.httpOptions
      )
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
