"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface FilterProps {
  onFilterChange: (searchTerm: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterChange(value);
  };

  return (
    <div className="w-[160px] max-w-[256px] min-w-[160px] h-[40px]">
      <div className="flex w-[160px] h-[40px] rounded-[12px] bg-[#373737]">
        <div className="flex w-[40px] h-[40px] pl-[16px] rounded-tl-[12px] rounded-bl-[12px] items-center justify-center">
          <div className="flex w-[24px] h-[24px] items-center">
            <Search className="w-[20px] h-[20px] text-[#C7C7C7]" />
          </div>
        </div>
        <input
          type="text"
          placeholder="Busca"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-[120px] h-[40px] px-[16px] py-[8px] rounded-tr-[12px] rounded-br-[12px]"
        />
      </div>
    </div>
  );
};
// width: 40;
// height: 40;
// angle: 0 deg;
// opacity: 1;
// padding-left: 16px;
// border-top-left-radius: 12px;
// border-bottom-left-radius: 12px;

// lupa
// width: 40;
// height: 40;
// angle: 0 deg;
// opacity: 1;
// padding-left: 16px;
// border-top-left-radius: 12px;
// border-bottom-left-radius: 12px;

// caixa
// width: 120;
// height: 40;
// angle: 0 deg;
// opacity: 1;
// padding-top: 8px;
// padding-right: 16px;
// padding-bottom: 8px;
// padding-left: 8px;
// border-top-right-radius: 12px;
// border-bottom-right-radius: 12px;

export default Filter;
