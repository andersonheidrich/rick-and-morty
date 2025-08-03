"use client";

import Filter from "../Filter";

const Header = () => {
  const handleFilterChange = (search: string) => {
    console.log("Busca:", search);
  };

  return (
    <header className="flex w-screen h-[89px] justify-between items-center px-4 md:px-10 py-6 border-b-[1px] border-b-[#E5E8EB]">
      <h1 className="flex w-[138px] h-[23px] gap-[16px]">Rick and Morty</h1>
      <div className="flex w-[100px] h-[40px] gap-[32px] justify-end columns-[2]">
        <Filter onFilterChange={handleFilterChange} />
      </div>
    </header>
  );
};

export default Header;
