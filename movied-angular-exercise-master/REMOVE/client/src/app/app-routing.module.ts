import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'movies/:movieId', component: MovieComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
