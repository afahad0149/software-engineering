export interface Pokemon {
  id: string,
  name: string,
  url: string,
  front_pic: string,
  back_pic: string,
  moves?: PokemonMeta[] | string[],
  types?: PokemonMeta[] | string[]
}

export interface PokemonMeta {
  id: string,
  identifier: string
}
