import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component'
import {NextDayWeatherComponent} from './next-day-weather/next-day-weather.component'
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path:'home',
    component: HomepageComponent
  },
  {
    path:'nextday/:nextday',
    component: NextDayWeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
