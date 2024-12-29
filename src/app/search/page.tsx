import SearchInput from "../../components/SearchInput";
import PokemonResult from "../../components/PokemonResult";
import { Container, Box } from "@mui/material";

export default function SearchPage() {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <SearchInput />
        <PokemonResult />
      </Box>
    </Container>
  );
}
