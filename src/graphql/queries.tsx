import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      gender
      status
    }
  }
`;
