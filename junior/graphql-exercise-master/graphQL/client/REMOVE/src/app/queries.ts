import { gql } from 'apollo-angular';

// QUERIES
export const GET_TYPES = gql`
  query GetAllTypes {
    getAllTypes {
      identifier
      id
    }
  }
`;

export const GET_POKEMON = gql`
  query GetPokemon($limit: Int) {
    getPokemon(limit: $limit) {
      id
      name
      back_pic
      front_pic
    }
  }
`;

export const GET_POKEMON_BY_ID = gql`
  query GetPokemonById($id: String!) {
    getPokemonById(id: $id) {
      name
      identifier
      id
      back_pic
      front_pic
      moves {
        id
        identifier
      }
      types {
        id
        identifier
      }
    }
  }
`;

export const GET_POKEMON_BY_TYPE = gql`
  query GetPokemonByType($id: String!) {
    getPokemonByType(id: $id) {
      id
      name
      back_pic
      front_pic
    }
  }
`;

export const GET_WISHLIST = gql`
  query Query {
    getWishList
  }
`;

// MUTATIONS
export const TOGGLE_WISHLIST_ITEM = gql`
  mutation ToggleWishListItem($id: String!) {
    toggleWishListItem(id: $id) {
      action
    }
  }
`;
