import { Component, OnInit } from '@angular/core';
import Trip from '../models/trip.model';
import { TripsService } from '../trips.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip-overview',
  templateUrl: './trip-overview.component.html',
  styleUrl: './trip-overview.component.scss'
})
export class TripOverviewComponent implements OnInit {
  public trip?: Trip
  public id: any;

  constructor(
    private _service: TripsService,
    private _route: ActivatedRoute
  ) {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    });

  }

  ngOnInit(): void {
  
    this._service.getTrips().subscribe(data => {
      var trips = data as Trip[];
      this.trip = trips.find(trip => (trip.id == this.id));
      console.log(this.trip);
    });
  }
}
