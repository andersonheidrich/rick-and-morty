"use client";

import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "@/graphql/queries";
import {
  CharacterCarousel,
  CharacterDetails,
  Header,
  Navbar,
} from "@/components";
import { useState, useEffect } from "react";
import { useFavorites } from "@/hooks/useFavorites";

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedMenu, setSelectedMenu] = useState("items");
  const [searchTerm, setSearchTerm] = useState("");

  const { favorites } = useFavorites();

  const { data, loading, error } = useQuery(GET_CHARACTERS, {
    variables: { name: searchTerm },
  });

  const characters = data?.characters?.results ?? [];

  useEffect(() => {
    if (selectedMenu === "items") {
      if (data?.characters?.results?.length > 0 && !selectedId) {
        setSelectedId(data.characters.results[0].id);
      }
    }
  }, [data, selectedId, selectedMenu]);

  useEffect(() => {
    if (selectedMenu !== "favorites") return;

    if (favorites.length === 0) {
      setSelectedId(null);
      return;
    }

    const currentIndex = favorites.indexOf(selectedId || "");

    if (currentIndex === -1) {
      const nextId =
        favorites[Math.min(currentIndex + 1, favorites.length - 1)] ??
        favorites[Math.max(currentIndex - 1, 0)] ??
        favorites[0];

      setSelectedId(nextId);
    }
  }, [favorites, selectedId, selectedMenu]);

  if (loading) return <p className="text-center">Carregando...</p>;
  if (error) return <p className="text-center">Erro: {error.message}</p>;

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Header onFilterChange={setSearchTerm} />
      <div className="flex flex-col flex-1 h-full justify-between px-4 py-6 sm:px-6 md:px-12 lg:px-24 xl:px-36">
        {selectedId && (
          <CharacterDetails id={selectedId} onChangeId={setSelectedId} />
        )}
        <Navbar selectedMenu={selectedMenu} onSelectMenu={setSelectedMenu} />
        {selectedMenu === "items" ? (
          <CharacterCarousel
            onSelectId={setSelectedId}
            characters={characters}
          />
        ) : (
          <CharacterCarousel onSelectId={setSelectedId} onlyFavorites />
        )}
      </div>
    </div>
  );
}
