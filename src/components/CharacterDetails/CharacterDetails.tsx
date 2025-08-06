import { useQuery } from "@apollo/client";
import { CharacterDetailProps } from "./interfaces";
import Image from "next/image";
import getCharacterById from "@/graphql/getCharacterById.graphql";
import { useEffect } from "react";
import { useActiveCharacter } from "@/hooks/useActiveCharacter";

export default function CharacterDetails({
  id,
  onChangeId,
}: CharacterDetailProps) {
  const { data, loading, error } = useQuery(getCharacterById, {
    variables: { id },
    skip: !id,
  });
  const { setActiveCharacterId, setOnChangeId } = useActiveCharacter();

  const character = data?.character;

  useEffect(() => {
    if (character?.id) {
      setActiveCharacterId(character.id);
    }
  }, [character?.id, setActiveCharacterId]);

  useEffect(() => {
    setOnChangeId?.(onChangeId);
  }, [onChangeId, setOnChangeId]);

  if (!id) return null;
  if (loading)
    return (
      <div className="flex flex-col md:flex-row w-full h-[580px] md:h-[344px] md:gap-[16px] px-4 py-3 items-center justify-center" />
    );
  if (error) return <p className="text-center">Erro: {error.message}</p>;
  if (!character)
    return <p className="text-center">Carregando personagem...</p>;

  return (
    <div className="flex w-full md:h-[344px]">
      <div className="flex flex-col md:flex-row w-full h-[580px] md:h-[344px] md:gap-[16px] px-4 py-3 items-center">
        <Image
          src={character.image}
          alt={character.name}
          width={291}
          height={320}
          className="rounded-[12px] h-[320px]"
        />
        <div className="w-[308px] md:w-[1101px] h-[236px] md:h-[240px] gap-[16px] py-4 px-8 font-normal leading-[32px] tracking-[0px]">
          <h1 className="w-[244px] md:w-[1037px] h-[56px] text-[24px] md:text-[48px] mb-[16px]">
            {character.name}
          </h1>
          <div className="w-[244px] md:w-[1037px] h-[156px] md:h-[160px] text-[16px]">
            <p>Espécie: {character.species}</p>
            <p>Gênero: {character.gender}</p>
            <p>Status: {character.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
