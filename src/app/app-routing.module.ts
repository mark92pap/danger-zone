import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripOverviewComponent } from './trip-overview/trip-overview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trip/:id', component: TripOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
