/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "@/graphql/queries";
import Image from "next/image";
import { CharacterCarouselProps } from "./interfaces";
import { useFavorites } from "@/hooks/useFavorites";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CharacterCarousel({
  onSelectId,
  onlyFavorites = false,
}: CharacterCarouselProps) {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const { favorites } = useFavorites();

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (loading)
    return (
      <p className="flex w-full h-[413px] items-center justify-center">
        Carregando...
      </p>
    );
  if (error) return <p className="text-center">Erro: {error.message}</p>;

  const characters = onlyFavorites
    ? data.characters.results.filter((character: any) =>
        favorites.includes(character.id)
      )
    : data.characters.results;

  if (onlyFavorites && characters.length === 0) {
    return null;
  }

  return (
    <div className="flex w-full h-[413px] items-center">
      <ChevronLeft
        className="w-[40px] h-[40px] cursor-pointer hover:scale-130 transition-transform duration-250"
        onClick={scrollLeft}
        aria-label="Scroll Left"
      />
      <div
        ref={scrollRef}
        className="flex w-full h-[413px] gap-[12px] p-4 overflow-x-auto overflow-y-hidden scrollbar-hide"
      >
        {characters.map((character: any) => (
          <button
            key={character.id}
            onClick={() => onSelectId(character.id)}
            className="flex-col w-[240px] h-[381px] gap-[16px] rounded-[8px] cursor-pointer hover:scale-103 transition-transform duration-250"
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
      <ChevronRight
        className="w-[40px] h-[40px] cursor-pointer hover:scale-130 transition-transform duration-250"
        onClick={scrollRight}
        aria-label="Scroll Right"
      />
    </div>
  );
}
