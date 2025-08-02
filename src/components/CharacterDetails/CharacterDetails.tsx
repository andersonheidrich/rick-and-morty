/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@apollo/client";
import { CharacterDetailProps } from "./interfaces";
import Image from "next/image";
import { GET_CHARACTER_BY_ID } from "@/graphql/queries";
import { useEffect, useState } from "react";

export default function CharacterDetails({ id }: CharacterDetailProps) {
  const { data, loading, error } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id },
    skip: !id,
  });
  const [displayedCharacter, setDisplayedCharacter] = useState<any | null>(
    null
  );

  useEffect(() => {
    if (data?.character) {
      setDisplayedCharacter(data.character);
    }
  }, [data]);

  if (!id) return null;
  if (loading) return <p className="text-center">Carregando personagem...</p>;
  if (error) return <p className="text-center">Erro: {error.message}</p>;
  if (!displayedCharacter)
    return <p className="text-center">Carregando personagem...</p>;

  return (
    <div className="w-[1440px] h-[344px]">
      <div className="flex w-[1440px] h-[344px] gap-[16px] py-[12px] px-[16px]">
        <Image
          src={displayedCharacter.image}
          alt={displayedCharacter.name}
          width={291}
          height={320}
          className="rounded-[12px]"
        />
        <div className="w-[1101px] h-[240px] gap-[16px] py-[16px] px-[32px] font-normal leading-[32px] tracking-[0px]">
          <h1 className="w-[1037px] h-[32px] text-[48px] mb-[16px]">
            {displayedCharacter.name}
          </h1>
          <ul className="w-[1037px] h-[160px] text-[16px]">
            <li>Espécie: {displayedCharacter.species}</li>
            <li>Gênero: {displayedCharacter.gender}</li>
            <li>Status: {displayedCharacter.status}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
