import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Trip from './models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripsService implements OnInit {
  public trips: Trip[] = [];

  constructor(
    private _http: HttpClient
  ) {

  }

  ngOnInit(): void {
    this._http.get('assets/data/trips.json')
      .subscribe(data => {
        this.trips = data as Trip[];
        console.log(data);
      });
  }

  getTrip(id: number): Trip | undefined {
    return this.trips.find(trip => trip.id === id);
  }
}
