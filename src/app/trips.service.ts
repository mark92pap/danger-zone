import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Trip from './models/trip.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  constructor(
    private _http: HttpClient
  ) {
  }

  getTrips(): Observable<Trip[]> {
    return this._http.get<Trip[]>('assets/data/trips.json');
  }
}
