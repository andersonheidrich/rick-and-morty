"use client";

import Favorite from "../Favorite";
import Filter from "../Filter";
import { FilterProps } from "../Filter/interfaces";

export default function Header({ onFilterChange }: FilterProps) {
  return (
    <header className="flex w-screen h-[89px] justify-between items-center px-4 md:px-10 py-6 border-b-[1px] border-b-[#E5E8EB]">
      <h1 className="flex w-[138px] h-[23px] gap-[16px]">Rick and Morty</h1>
      <div className="flex w-[100px] md:w-full h-[40px] rows-1 columns-2 gap-x-[32px] gap-y-[32px] justify-end">
        <Filter onFilterChange={onFilterChange} />
        <Favorite />
      </div>
    </header>
  );
}
