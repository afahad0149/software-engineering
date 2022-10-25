import { map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Pokemon, PokemonMeta } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private baseURL = 'http://localhost:3030';
  private singlePokemon?: Pokemon;

  constructor(public http: HttpClient) {}

  // Request a list of pokemon; if no limit query provided, default to 50.
  gottaCatchEmAll(limit: string="50"): Observable<Pokemon[]> {
    const params = new HttpParams().set('limit', limit);
    return this.http.get<Pokemon[]>(`${this.baseURL}/pokemon`, { params });
  }

  catchByType(typeId:string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.baseURL}/pokemon/type/${typeId}`);
  }

  catchOne(id: string): Observable<Pokemon> {
    const pokemonObs = this.http.get<Pokemon>(`${this.baseURL}/pokemon/${id}`);
    const pokeWithAllDataObs = this.getMovesAndTypesForPokemon(pokemonObs);
    return pokeWithAllDataObs;
  }

  getAllTypes(): Observable<PokemonMeta[]> {
    return this.http.get<PokemonMeta[]>(`${this.baseURL}/types`);
  }

  toggleWishList(id: string): Observable<{}> {
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type':  'application/json' })
      };
      return this.http.post(`${this.baseURL}/wishlist/`, {id}, httpOptions);
  }

  getWishList(): Observable<{[id: string]: boolean}> {
    return this.http.get<{[id: string]: boolean}>(`${this.baseURL}/wishlist/`);
  }
  
  // Helper methods 
  private getMovesAndTypesForPokemon(data: Observable<Pokemon>) {
    return data
      .pipe(
        map((res: Pokemon) => {
          // Save the response - we will need it later
          this.singlePokemon = res;
          // Forward on an object with move ids and type ids of the pokemon we got back
          return {
            moveIds: res.moves ? res.moves as string[] : [],
            typeIds: res.types ? res.types as string[] : []
          };
        }),
        mergeMap(idData => {
          // ForkJoin is the RxJS alternative to Promise.all
          return forkJoin({
            moves: forkJoin(this.getDataFromIds(idData.moveIds, 'moves')),
            types: forkJoin(this.getDataFromIds(idData.typeIds, 'types')),
          });
        }),
        map(({ moves, types }) => {
          // Update the saved pokemon with move and type object we've received
          this.singlePokemon!.moves = moves;
          this.singlePokemon!.types = types;
          return this.singlePokemon!;
        })
      );
  }

  private getDataFromIds(idArray: string[], path: string): Observable<PokemonMeta>[] {
    // Notice that this operation returns an array of Observables
    // looking like this: [Observable<data0>, Observable<data1> ... etc],
    // that is why forkJoin is necessary.
    return idArray.map(id => this.http.get<PokemonMeta>(`${this.baseURL}/${path}/${id}`));
  }

}
