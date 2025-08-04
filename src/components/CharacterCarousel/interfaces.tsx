export interface CharacterCarouselProps {
  characters?: Character[];
  onSelectId: (id: string) => void;
  onlyFavorites?: boolean;
}

export interface Character {
  id: string;
  name: string;
  image: string;
}
