import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonMeta, GQLResponse } from './pokemon';
import { Apollo } from 'apollo-angular';
import { 
  GET_TYPES,
  GET_POKEMON,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_TYPE,
  GET_WISHLIST,
  TOGGLE_WISHLIST_ITEM
} from './queries';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private apollo: Apollo) {}

  getAllTypes(): Observable<PokemonMeta[]> {
    return this.apollo.query<GQLResponse<PokemonMeta[]>>( { query: GET_TYPES } )
      .pipe(map(({ data }) => data['getAllTypes']));
  }
  
  // Request a list of pokemon; if no limit query provided, default to 50.
  gottaCatchEmAll(limit: number | string = 50): Observable<Pokemon[]> {
    return this.apollo.query<GQLResponse<Pokemon[]>>({ query: GET_POKEMON, variables: { limit }})
      .pipe(map(({ data }) => data['getPokemon']));
  }

  catchOne(id: string): Observable<Pokemon> {
    return this.apollo.query<GQLResponse<Pokemon>>( { query: GET_POKEMON_BY_ID, variables: { id } })
      .pipe(map(({ data }) => data['getPokemonById']));
  }

  catchByType(id: string): Observable<Pokemon[]> {
    return this.apollo.query<GQLResponse<Pokemon[]>>( { query: GET_POKEMON_BY_TYPE, variables: { id }} )
      .pipe(map(({ data }) => data['getPokemonByType']));
  }

  getWishList(): Observable<{[id: string]: boolean}> {
    return this.apollo.query<GQLResponse<string>>( { query: GET_WISHLIST } )
      .pipe(map(({ data, error }) => JSON.parse(data['getWishList'])));
  }

  toggleWishList(id: string) {
    return this.apollo.mutate<
        GQLResponse<{ [id: string]: boolean }>
      >({ mutation: TOGGLE_WISHLIST_ITEM, variables: { id }})
        .pipe(map(({data}) => data && data['toggleWishList']));
  }
}
