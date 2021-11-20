import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private restUrl: string = 'http://localhost:8080/eventmanagementsystem/customer';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getCustomerFromService(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(this.restUrl + '/allcstr')
      .pipe(retry(1), catchError(this.handleError));
  }
  createCustomer(customer: any): Observable<Customer> {
    return this.http
      .post<Customer>(
        this.restUrl + '/createcstr',
        JSON.stringify(customer),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteCustomer(customerid: number) {
    return this.http
      .delete<Customer>(
        this.restUrl + '/deleteCustomer/' + customerid,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  getcustomer(customerid: any): Observable<Customer> {
    return this.http
      .get<Customer>(this.restUrl + '/getcstr/' + customerid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  updateCustomer(customer: any): Observable<Customer> {
    console.log('from service update() ' + customer);
    return this.http
      .put<Customer>(
        this.restUrl + '/updatecstr',
        JSON.stringify(customer),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  getCustomer(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(this.restUrl + '/login')
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