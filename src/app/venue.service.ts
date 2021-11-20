import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Venue } from './Venue';

@Injectable({
  providedIn: 'root',
})
export class VenueService {
  private restUrl: string = 'http://localhost:8080/eventmanagementsystem/venue';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getVenueFromService(): Observable<Venue[]> {
    return this.http.get<Venue[]>(this.restUrl + '/allVenue')
    .pipe(retry(1), catchError(this.handleError));
  }
  createVenue(venue: any): Observable<Venue> {
    return this.http.post<Venue>(
      this.restUrl + '/createVenue',
      JSON.stringify(venue),
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.handleError));
  }

  deleteVenue(venueid: number) {
    return this.http.delete<Venue>(
      this.restUrl + '/deleteVenue/' + venueid,
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.handleError));
  }

  getVenue(venueid: any): Observable<Venue> {
    return this.http.get<Venue>(
      this.restUrl + '/getVenue/' + venueid,
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.handleError));
  }

  updateVenue(venue: Venue): Observable<Venue> {
    console.log('from service update() ' + venue);
    return this.http.put<Venue>(
      this.restUrl + '/updatevenue',
      JSON.stringify(venue),
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
