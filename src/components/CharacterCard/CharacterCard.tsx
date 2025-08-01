import { CharacterCardProps } from "./interfaces";
import Image from "next/image";

export default function CharacterCard({
  character,
  onSelect,
}: CharacterCardProps) {
  return (
    <div className="w-[1440px] h-[413px]">
      <button
        className="flex-col w-[240px] h-[381px] min-w-[240px] gap-[16px] rounded-[8px] cursor-pointer"
        onClick={() => onSelect(character)}
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
    </div>
  );
}
