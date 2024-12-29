"use client";
import SearchInput from "../../components/SearchInput";
import PokemonResult from "../../components/PokemonResult";
import { Container, Box } from "@mui/material";
import { Suspense } from "react";

function SearchWrapper() {
  return (
    <>
      <SearchInput />
      <PokemonResult />
    </>
  );
}

export default function SearchPage() {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Suspense fallback={<div>Loading search...</div>}>
          <SearchWrapper />
        </Suspense>
      </Box>
    </Container>
  );
}