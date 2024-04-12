import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private _router: Router) {

  }

  navigateHome(): void {
    this._router.navigate(['/']);
  }

  navigateContact(): void {
    this._router.navigate(['/contact']);
  }

}
