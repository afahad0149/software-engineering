import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieComponent } from './movie/movie.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieListComponent,
    MovieListItemComponent,
    MovieComponent,
    MovieSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbRatingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
