/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useQuery } from "@apollo/client";
import getCharacters from "@/graphql/getCharacters.graphql";
import Image from "next/image";
import { CharacterCarouselProps } from "./interfaces";
import { useFavorites } from "@/hooks/useFavorites";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CharacterCarousel({
  onSelectId,
  onlyFavorites = false,
}: CharacterCarouselProps) {
  const { favorites } = useFavorites();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [allCharacters, setAllCharacters] = useState<any[]>([]);

  const { loading, error, data, fetchMore } = useQuery(getCharacters, {
    variables: { page: 1 },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (!data) return;

    const fetchAllCharacters = async () => {
      let currentPage = 1;
      let all = [...data.characters.results];
      let hasNextPage = data.characters.info.next;

      while (hasNextPage) {
        currentPage++;
        const more = await fetchMore({
          variables: { page: currentPage },
        });

        all = [...all, ...more.data.characters.results];
        hasNextPage = more.data.characters.info.next;
      }

      setAllCharacters(all);
    };

    fetchAllCharacters();
  }, [data, fetchMore]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (loading && allCharacters.length === 0) {
    return (
      <p className="flex w-full h-[413px] items-center justify-center">
        Carregando...
      </p>
    );
  }

  if (error) {
    return <p className="text-center">Erro: {error.message}</p>;
  }

  const characters = onlyFavorites
    ? allCharacters.filter((character) => favorites.includes(character.id))
    : allCharacters;

  if (onlyFavorites && characters.length === 0) {
    return null;
  }

  return (
    <div className="flex w-full h-[413px] items-center">
      <ChevronLeft
        className="w-[40px] h-[40px] cursor-pointer hover:scale-130 transition-transform duration-250 hidden md:block"
        onClick={scrollLeft}
        aria-label="Scroll Left"
      />
      <div
        ref={scrollRef}
        className="flex w-full h-[413px] gap-[12px] p-4 overflow-x-auto overflow-y-hidden scrollbar-hide"
      >
        {characters.map((character, index) => (
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
              priority={index < 6}
            />
            <p className="flex w-[240px] h-[45px] justify-start items-center">
              {character.name}
            </p>
          </button>
        ))}
      </div>
      <ChevronRight
        className="w-[40px] h-[40px] cursor-pointer hover:scale-130 transition-transform duration-250 hidden md:block"
        onClick={scrollRight}
        aria-label="Scroll Right"
      />
    </div>
  );
}
