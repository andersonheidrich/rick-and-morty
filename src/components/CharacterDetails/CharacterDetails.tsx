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
    <div className="flex w-[1440px] h-[344px]">
      <div className="flex w-[1440px] h-[344px] gap-[16px] py-[12px] px-[16px]">
        <Image
          src={character.image}
          alt={character.name}
          width={291}
          height={320}
          className="rounded-[12px]"
        />
        <div className="w-[1101px] h-[240px] gap-[16px] py-[16px] px-[32px] font-normal leading-[32px] tracking-[0px]">
          <h1 className="w-[1037px] h-[32px] text-[48px] mb-[16px]">
            {character.name}
          </h1>
          <ul className="w-[1037px] h-[160px] text-[16px]">
            <li>Espécie: {character.species}</li>
            <li>Gênero: {character.gender}</li>
            <li>Status: {character.status}</li>
          </ul>
          <button
            onClick={handleToggleFavorite}
            className="flex w-[40px] h-[40px] gap-[8px] px-[10px] rounded-[12px] items-center bg-[#373737] cursor-pointer"
          >
            <Heart
              className="w-[20px] h-[20px] text-[#C7C7C7]"
              fill={isFavorite(character.id) ? "red" : "#373737"}
              stroke={isFavorite(character.id) ? "red" : "#C7C7C7"}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
