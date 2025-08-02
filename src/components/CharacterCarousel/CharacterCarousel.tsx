/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "@/graphql/queries";
import Image from "next/image";
import { CharacterCarouselProps } from "./interfaces";
import { useFavorites } from "@/hooks/useFavorites";

export default function CharacterCarousel({
  onSelectId,
  onlyFavorites = false,
}: CharacterCarouselProps) {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const { favorites } = useFavorites();

  if (loading) return <p className="text-center">Carregando...</p>;
  if (error) return <p className="text-center">Erro: {error.message}</p>;

  const characters = onlyFavorites
    ? data.characters.results.filter((character: any) =>
        favorites.includes(character.id)
      )
    : data.characters.results;

  if (onlyFavorites && characters.length === 0) {
    return <p className="text-center">Nenhum personagem favoritado ainda.</p>;
  }

  return (
    <div className="flex w-[1440px] h-[413px] overflow-x-auto overflow-y-hidden">
      <div className="flex w-[1784px] h-[413px] gap-[12px] p-[16px]">
        {characters.map((character: any) => (
          <button
            key={character.id}
            onClick={() => onSelectId(character.id)}
            className="flex-col w-[240px] h-[381px] min-w-[240px] gap-[16px] rounded-[8px] cursor-pointer hover:scale-103 transition-transform duration-250"
          >
            <Image
              src={character.image}
              alt={character.name}
              width={240}
              height={320}
              className="rounded-[12px] h-[320px]"
            />
            <p className="flex w-[240px] h-[45px] justify-start items-center">
              {character.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
