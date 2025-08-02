"use client";
import { NavbarProps } from "./interfaces";

export default function Navbar({ selectedMenu, onSelectMenu }: NavbarProps) {
  return (
    <nav className="w-[1440px] h-[66px] pb-[12px]">
      <div className="flex w-[1440px] h-[54px] gap-[32px] px-[16px] border-b-[1px] border-b-[#6E6E6E] font-bold text-[14px] leading-[21px] tracking-[0px]">
        <div
          className={`w-[34px] h-[53px] pt-[16px] pb-[13px] border-b-[3px] border-b-[#E5E8EB] cursor-pointer
          ${
            selectedMenu === "items"
              ? "border-b-[#E5E8EB]"
              : "border-b-transparent text-[#C7C7C7]"
          }`}
          onClick={() => onSelectMenu("items")}
        >
          <a className="w-[34px] h-[21px]">Itens</a>
        </div>
        <div
          className={`w-[63px] h-[53px] pt-[16px] pb-[13px] border-b-[3px] border-b-[#E5E8EB] cursor-pointer
          ${
            selectedMenu === "favorites"
              ? "border-b-[#E5E8EB]"
              : "border-b-transparent text-[#C7C7C7]"
          }`}
          onClick={() => onSelectMenu("favorites")}
        >
          <a className="w-[63px] h-[21px]">Favoritos</a>
        </div>
      </div>
    </nav>
  );
}
