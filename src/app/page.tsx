import { CharacterDetail, CharacterList } from "@/components";

export default async function Home() {
  return (
    <div className="w-[1920px] h-[911px] px-[160px] py-[64px]">
      <div className="w-[1440px] max-w-[1440px] h-[783px]">
        <CharacterDetail />
        <CharacterList />
      </div>
    </div>
  );
}
