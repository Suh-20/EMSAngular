import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { CustomerPage } from './CustomerPage';

@Injectable({
  providedIn: 'root'
})
export class CustomerpageService {   
  private restUrl: string = 'http://localhost:8080/eventmanagementsystemm/event';

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getCustomerPageFromService(): Observable<CustomerPage[]> {
    return this.http.get<CustomerPage[]>(this.restUrl + '/allcus')
    .pipe(retry(1), catchError(this.handleError));
  }
  createCustomerPage(customerpage: any): Observable<CustomerPage> {
    return this.http.post<CustomerPage>(
      this.restUrl + '/customerpage',
      JSON.stringify(customerpage),
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

