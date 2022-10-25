import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SinglePokemonComponent } from './single-pokemon/single-pokemon.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'search', component: DashboardComponent },
  { path: 'pokemon/:pokeId', component: SinglePokemonComponent },
  { path: '**', redirectTo: ''}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
