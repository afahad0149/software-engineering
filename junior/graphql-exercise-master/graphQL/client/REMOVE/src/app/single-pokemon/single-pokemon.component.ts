import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pokemon, PokemonMeta } from '../pokemon';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.css']
})
export class SinglePokemonComponent implements OnInit {

  pokemon?: Pokemon;
  show = false;
  moves: PokemonMeta[] = [];
  types: PokemonMeta[] = [];

  constructor(private apiClient: ApiClientService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id: string = params['pokeId'];
      this.apiClient.catchOne(id).subscribe((data: Pokemon) => {
        this.pokemon = data;
        if (data.moves) this.moves = data.moves as PokemonMeta[];
        if (data.types) this.types = data.types as PokemonMeta[];
        this.show = true;
      });
    });
  }
}
