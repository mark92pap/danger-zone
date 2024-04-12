import { Component, Input } from '@angular/core';

@Component({
  selector: 'trip-list-item',
  templateUrl: './trip-list-item.component.html',
  styleUrl: './trip-list-item.component.scss'
})
export class TripListItemComponent {

  @Input() trip: any;

}
