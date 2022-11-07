import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SinglePokemonComponent } from './single-pokemon/single-pokemon.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    SearchBarComponent,
    SinglePokemonComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
