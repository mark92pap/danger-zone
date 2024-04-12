import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Trip from '../models/trip.model';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public trips: Trip[] =[];

  constructor(
    private _service: TripsService
  ) {

  }

  ngOnInit(): void {
    this._service.getTrips().subscribe(data => {
      this.trips = data as Trip[]; 
    });
  }
}
