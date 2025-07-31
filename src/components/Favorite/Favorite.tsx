import { Heart } from "lucide-react";

const Favorite = () => {
  return (
    <div className="flex w-[40px] h-[40px] max-w-[480px] gap-[8px] px-[10px] rounded-[12px] items-center bg-[#373737] cursor-pointer">
      <Heart className="w-[20px] h-[20px] text-[#C7C7C7]" />
    </div>
  );
};

export default Favorite;
