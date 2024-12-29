"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TextField, Button, Box } from "@mui/material";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("name") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?name=${searchQuery}`);
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
      <TextField
        label="Search Pokémon"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
}
