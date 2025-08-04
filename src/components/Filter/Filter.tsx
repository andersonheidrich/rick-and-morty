"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { FilterProps } from "./interfaces";

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterChange(value);
  };

  return (
    <div className="flex w-[57px] md:w-[160px] h-[40px]">
      <div className="flex w-[57px] md:w-[160px] h-[40px] rounded-[12px] bg-[#373737]">
        <div className="flex w-[40px] h-[40px] pl-4 rounded-tl-[12px] rounded-bl-[12px] items-center justify-center">
          <div className="flex w-[24px] h-[24px] items-center">
            <Search className="w-[24px] h-[24px] text-[#C7C7C7]" />
          </div>
        </div>
        <input
          type="text"
          placeholder="Busca"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-[14px] md:w-[120px] h-[40px] py-2 pr-4 pl-2 rounded-tr-[12px] rounded-br-[12px]"
        />
      </div>
    </div>
  );
};

export default Filter;
