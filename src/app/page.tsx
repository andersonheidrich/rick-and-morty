"use client";

import { useQuery } from "@apollo/client";
import getCharacters from "@/graphql/getCharacters.graphql";
import {
  CharacterCarousel,
  CharacterDetails,
  Header,
  Navbar,
} from "@/components";
import { useState, useEffect } from "react";
import { useFavorites } from "@/hooks/useFavorites";
import { useDebounce } from "use-debounce";

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedMenu, setSelectedMenu] = useState("items");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);

  const { favorites } = useFavorites();

  const { data, loading, error } = useQuery(getCharacters, {
    variables: { name: debouncedSearchTerm },
    fetchPolicy: "no-cache",
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

  if (loading)
    return (
      <div className="flex w-screen h-screen overflow-hidden justify-center items-center">
        Carregando...
      </div>
    );
  if (error) return <p className="text-center">Erro: {error.message}</p>;

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Header onFilterChange={setSearchTerm} />
      <div className="flex flex-col flex-1 h-full justify-between px-4 py-2 sm:px-6 md:px-12 lg:px-24 xl:px-36">
        <div className="min-h-[344px] mb-6">
          {selectedId ? (
            <CharacterDetails id={selectedId} onChangeId={setSelectedId} />
          ) : (
            selectedMenu === "favorites" &&
            favorites.length === 0 && (
              <div className="flex flex-col md:flex-row w-full h-[580px] md:h-[344px] md:gap-[16px] px-4 py-3 items-center justify-center">
                Nenhum personagem favoritado.
              </div>
            )
          )}
        </div>
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
