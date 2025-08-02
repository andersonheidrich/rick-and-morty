"use client";

import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "@/graphql/queries";
import { CharacterCarousel, CharacterDetails } from "@/components";
import { useState, useEffect } from "react";

export default function Home() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (data?.characters?.results?.length > 0 && !selectedId) {
      setSelectedId(data.characters.results[0].id);
    }
  }, [data, selectedId]);

  if (loading) return <p className="text-center">Carregando...</p>;
  if (error) return <p className="text-center">Erro: {error.message}</p>;

  return (
    <div className="w-[1920px] h-[911px] px-[160px] py-[64px]">
      <div className="w-[1440px] max-w-[1440px] h-[783px]">
        {selectedId && <CharacterDetails id={selectedId} />}
        <CharacterCarousel onSelectId={setSelectedId} />
      </div>
    </div>
  );
}
