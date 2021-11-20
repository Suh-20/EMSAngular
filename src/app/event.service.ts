import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Event } from './Event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private restUrl: string = 'http://localhost:8080/eventmanagementsystem/';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getEventFromService(): Observable<Event[]> {
    return this.http.get<Event[]>(this.restUrl + '/alleve')
    .pipe(retry(1), catchError(this.handleError));
  }
  createEvent(event: any): Observable<Event> {
    return this.http.post<Event>(
      this.restUrl + '/createEvent',
      JSON.stringify(event),
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.handleError));
  }

  deleteEvent(eid: number) {
    return this.http.delete<Event>(
      this.restUrl + '/deleteEvent/' + eid,
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.handleError));
  }

  getEvent(eid: any): Observable<Event> {
    return this.http.get<Event>(
      this.restUrl + '/getEvent/' + eid,
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.handleError));
  }

  updateEvent(event: Event): Observable<Event> {
    console.log('from service update() ' + event);
    return this.http.put<Event>(
      this.restUrl + '/updateEvent',
      JSON.stringify(event),
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
