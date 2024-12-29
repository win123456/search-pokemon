"use client";

import { gql, useQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Typography,
  List,
  ListItem,
  Link,
  CircularProgress,
} from "@mui/material";
import { GET_POKEMON } from "../qraphql/queries";

export default function PokemonResult() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name },
    skip: !name,
  });

  if (!name) {
    return <Typography>Please enter a Pokémon name to search.</Typography>;
  }

  if (loading) {
    return <CircularProgress />;
  }

  if (error || !data?.pokemon) {
    return (
      <Typography variant="h5" color="error">
        Pokémon not found.
      </Typography>
    );
  }

  const pokemon = data.pokemon;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">{pokemon.name}</Typography>
      <Typography>Type(s): {pokemon.types.join(", ")}</Typography>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Attacks</Typography>
        <List>
          {pokemon.attacks.fast?.map((attack: any) => (
            <ListItem key={attack.name}>
              Fast Attack: {attack.name} ({attack.type})
            </ListItem>
          ))}
          {pokemon.attacks.special?.map((attack: any) => (
            <ListItem key={attack.name}>
              Special Attack: {attack.name} ({attack.type})
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Evolutions</Typography>
        {pokemon.evolutions?.length ? (
          <List>
            {pokemon.evolutions?.map((evo: any) => (
              <ListItem key={evo.name}>
                <Link href={`/search?name=${evo.name}`} underline="hover">
                  {evo.name}
                </Link>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>No evolutions available.</Typography>
        )}
      </Box>
    </Box>
  );
}
