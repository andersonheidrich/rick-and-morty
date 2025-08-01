import { CharacterListProps } from "./interfaces";
import Image from "next/image";

export default function CharacterList({
  character,
  onSelect,
}: CharacterListProps) {
  return (
    <button onClick={() => onSelect(character)} className="group text-left">
      <div className="relative w-full aspect-square rounded-lg overflow-hidden">
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
      </div>
      <p className="mt-2 text-center text-sm">{character.name}</p>
    </button>
  );
}
