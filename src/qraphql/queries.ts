// src/graphql/queries.ts
import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
  query GetPokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      number
      types
      image
      attacks {
        special {
          name
          type
          damage
        }
      }
      evolutions {
        name
        image
      }
    }
  }
`;
