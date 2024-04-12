import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Trip from '../models/trip.model';

@Component({
  selector: 'trip-list-item',
  templateUrl: './trip-list-item.component.html',
  styleUrl: './trip-list-item.component.scss'
})
export class TripListItemComponent {

  @Input() trip?: Trip;

  constructor(private _router: Router) {

  }

  tripSelected(): void {
    this._router.navigate([`trip/${this.trip?.id}`])
  }

}
