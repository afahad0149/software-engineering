const types = `
  type Pokemon {
    _id: ID!
    id: String!
    identifier: String!
    name: String!
    species_id: Int!
    height: Int!
    weight: Int!
    base_experience: Int!
    order: Int!
    is_default: Int
    types: [Type]!
    moves: [Move]!
    evolves_to: Int
    url: String!
    front_pic: String!
    back_pic: String!
  }

  type Type {
    _id: ID!
    id: String!
    identifier: String!
    generation_id: Int
    damage_class_id: Int
  }

  type Move {
    _id: ID!
    id: String!
    identifier: String!
    generation_id: Int
    type_id: Int
    power: Int
    pp: Int
    accuracy: Int
    priority: Int
    target_id: Int
    damage_class_id: Int
    effect_id: Int
    type: Type
  }

  type ToggleResponse {
    action: String
  }
`;

module.exports = types;
