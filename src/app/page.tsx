"use client";

import { gql } from "@apollo/client";
import client from "../lib/apollo-client";
import { Box, Typography, List, ListItem, Link, Container } from "@mui/material";

const GET_POPULAR_POKEMONS = gql`
  query GetPokemons {
    pokemons(first: 10) {
      id
      name
    }
  }
`;

export default async function HomePage() {
  const { data } = await client.query({ query: GET_POPULAR_POKEMONS });
  const pokemons = data.pokemons;

  return (
    <Container>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          Popular Pokémon
        </Typography>
        <List sx={{ display: "inline-block", textAlign: "left" }}>
          {pokemons.map((pokemon: { id: string; name: string }) => (
            <ListItem key={pokemon.id}>
              <Link href={`/search?name=${pokemon.name}`} underline="hover">
                {pokemon.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}
