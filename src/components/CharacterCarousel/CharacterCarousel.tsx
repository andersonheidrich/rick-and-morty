"use client";
import Image from "next/image";
import { CharacterCarouselProps } from "./interfaces";
import { useFavorites } from "@/hooks/useFavorites";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CharacterCarousel({
  onSelectId,
  characters = [],
  onlyFavorites = false,
}: CharacterCarouselProps) {
  const { favorites } = useFavorites();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const filteredCharacters = onlyFavorites
    ? characters.filter((character) => favorites.includes(character.id))
    : characters;

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
        {filteredCharacters.map((character, index) => (
          <div
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
          </div>
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
