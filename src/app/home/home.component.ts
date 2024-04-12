import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Trip from '../models/trip.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public trips: Trip[] =[];

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

}
