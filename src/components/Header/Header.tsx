"use client";

// import Favorite from "../Favorite";
import Filter from "../Filter";

const Header = () => {
  const handleFilterChange = (search: string) => {
    console.log("Busca:", search);
  };

  return (
    <header className="flex max-w-[1920px] min-w-[360px] h-[89px] justify-between items-center px-[40px] py-[24px] border-b-[1px] border-b-[#E5E8EB]">
      <h1 className="flex max-w-[170px] min-w-[138px] h-[23px] gap-[16px]">
        Rick and Morty
      </h1>
      <div className="flex max-w-[1670px] w-[100px] h-[40px] gap-[32px] justify-end columns-[2]">
        <Filter onFilterChange={handleFilterChange} />
        {/* <Favorite /> */}
      </div>
    </header>
  );
};

export default Header;
