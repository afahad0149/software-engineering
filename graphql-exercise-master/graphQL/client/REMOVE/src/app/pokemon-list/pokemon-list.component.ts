import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiClientService } from '../api-client.service';
import { Pokemon, PokemonMeta } from '../pokemon';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnChanges {
  
  @Input() selectedView?: string;

  allPokemon: Pokemon[] = [];
  pokemon: Pokemon[] = [];
  types: PokemonMeta[] = [];
  faves: {[id: string]: boolean} = {};

  constructor(private http: ApiClientService, private route: ActivatedRoute, private fb: FormBuilder) { }

  // Select component logic
  typeSelectForm = this.fb.group({
    typeName: ['', [Validators.required]]
  });

  changeType(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.typeName?.setValue(target.value, { onlySelf: true });
    this.onSelectType();    
  }

  get typeName() {
    return this.typeSelectForm.get('typeName');
  }
  
  ngOnInit(): void {
    this.getAllPokemon();

    this.http.getAllTypes()
      .subscribe((data: PokemonMeta[]) => {
        this.types = data;
      });
    this.http.getWishList()
      .subscribe((data: {[id: string]: boolean}) => {
        this.faves = data;
      });
  }

  ngOnChanges(_: SimpleChanges): void {
    if (this.typeSelectForm.valid) {
      this.onSelectType();
    } else {
      this.pokemon = this.maybeFilterPokemon(this.allPokemon);
    }
  }

  getAllPokemon(): void {
    this.route.queryParams.subscribe(params => {
      const limit: string = params['limit'];
      const nameSearch: string = params['pokeName'];

      this.http.gottaCatchEmAll(limit)
        .subscribe((data: Pokemon[]) => {
          if (nameSearch) {
            this.pokemon = this.maybeFilterPokemon(this.newSearch(data, nameSearch));
          } else {
            this.allPokemon = data;
            this.pokemon = this.maybeFilterPokemon(data);
          }
        });
    });
  }

  onSelectType(): void {
    if (!this.typeSelectForm.valid) {
      this.getAllPokemon();
    } else {
      this.http.catchByType(this.typeSelectForm.value.typeName.id)
        .subscribe((data: Pokemon[]) => {
            this.pokemon = this.maybeFilterPokemon(data);
        });
    }
  }

  onFave(id: string): void {
    this.faves[id] = !this.faves[id];
    this.http.toggleWishList(id).subscribe(_ => this.showByType());
  }

  isFave(id: string): string {
    if (this.faves[id]) return '💚';
    return '🤍';
  }

  newSearch(data: Pokemon[], nameSearch: string) {
    const regex = new RegExp(nameSearch, 'gi');
    return data.filter((poke) => regex.test(poke.name));
  }
  
  isShowingAll (): boolean {
    return this.selectedView !== 'wishlist';
  }

  private showByType () {
    if (this.typeSelectForm.valid) {
      this.onSelectType();
    } else {
      this.pokemon = this.maybeFilterPokemon(this.allPokemon);
    }
  }
  private maybeFilterPokemon (list:Pokemon[]): Pokemon[] {
    if (this.isShowingAll()) return list;
    return list.filter(poke => this.faves[poke.id]);
  }
}
