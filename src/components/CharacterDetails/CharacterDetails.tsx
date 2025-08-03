import { useQuery } from "@apollo/client";
import { CharacterDetailProps } from "./interfaces";
import Image from "next/image";
import { GET_CHARACTER_BY_ID } from "@/graphql/queries";
import { useFavorites } from "@/hooks/useFavorites";
import { Heart } from "lucide-react";

export default function CharacterDetails({
  id,
  onChangeId,
}: CharacterDetailProps) {
  const { data, loading, error } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id },
    skip: !id,
  });

  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  const handleToggleFavorite = () => {
    toggleFavorite(character.id);

    if (isFavorite(character.id)) {
      const index = favorites.indexOf(character.id);
      const nextId = favorites[index + 1] || favorites[index - 1] || null;
      onChangeId(nextId);
    }
  };

  const character = data?.character;

  if (!id) return null;
  if (loading) return <p className="text-center">Carregando personagem...</p>;
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
          <h1 className="w-[244px] md:w-[1037px] h-[32px] text-[24px] md:text-[48px] mb-[16px]">
            {character.name}
          </h1>
          <div className="w-[244px] md:w-[1037px] h-[156px] md:h-[160px] text-[16px]">
            <p>Espécie: {character.species}</p>
            <p>Gênero: {character.gender}</p>
            <p>Status: {character.status}</p>
          </div>
          {/* <button
            onClick={handleToggleFavorite}
            className="flex w-[40px] h-[40px] gap-[8px] px-[10px] rounded-[12px] items-center bg-[#373737] cursor-pointer"
          >
            <Heart
              className="w-[20px] h-[20px] text-[#C7C7C7]"
              fill={isFavorite(character.id) ? "red" : "#373737"}
              stroke={isFavorite(character.id) ? "red" : "#C7C7C7"}
            />
          </button> */}
        </div>
      </div>
    </div>
  );
}
