import { useFavorites } from "@/hooks/useFavorites";
import { Heart } from "lucide-react";
import { useQuery } from "@apollo/client";
import getCharacterById from "@/graphql/getCharacterById.graphql";
import { useActiveCharacter } from "@/hooks/useActiveCharacter";

const Favorite = () => {
  const { activeCharacterId, onChangeId } = useActiveCharacter();
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  const { data } = useQuery(getCharacterById, {
    variables: { id: activeCharacterId },
    skip: !activeCharacterId,
  });

  const character = data?.character;

  const handleToggleFavorite = () => {
    if (!character) return;

    toggleFavorite(character.id);

    if (isFavorite(character.id) && onChangeId) {
      const index = favorites.indexOf(character.id);
      const nextId = favorites[index + 1] || favorites[index - 1] || null;
      onChangeId(nextId);
    }
  };

  if (!character) return null;

  return (
    <button
      onClick={handleToggleFavorite}
      className="flex w-[40px] h-[40px] max-w-[480px] gap-[8px] px-[10px] rounded-[12px] items-center bg-[#373737] cursor-pointer"
    >
      <Heart
        className="w-[20px] h-[20px] text-[#C7C7C7]"
        fill={isFavorite(character.id) ? "red" : "#373737"}
        stroke={isFavorite(character.id) ? "red" : "#C7C7C7"}
      />
    </button>
  );
};

export default Favorite;
