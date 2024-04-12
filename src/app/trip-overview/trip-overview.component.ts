import { Component, Input } from '@angular/core';
import Trip from '../models/trip.model';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-trip-overview',
  templateUrl: './trip-overview.component.html',
  styleUrl: './trip-overview.component.scss'
})
export class TripOverviewComponent {
  @Input()
  set id(tripId: number) {
    this.trip = this._service.getTrip(tripId);
  }

  public trip?: Trip

  constructor(
    private _service: TripsService
  ) {

  }
}
