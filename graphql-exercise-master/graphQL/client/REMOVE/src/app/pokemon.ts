export interface Pokemon {
  id: string,
  name: string,
  front_pic: string,
  back_pic: string,
  moves?: PokemonMeta[],
  types?: PokemonMeta[]
}

export interface PokemonMeta {
  id: string,
  identifier: string
}

export interface GQLResponse<T> {
  [key: string]: T
}
