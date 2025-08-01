/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "@/graphql/queries";

const CharacterList = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div className="flex w-[1440px] h-[413px]">
      {data.characters.results.map((char: any) => (
        <div
          key={char.id}
          className="flex-col justify-center w-[1784px] h-[413px] gap-[12px] p-[16px]"
        >
          <div className="w-[240px] h-[381px] min-w-[240px] gap-[16px] rounded-[8px]">
            <img
              src={char.image}
              alt={char.name}
              className="w-[240px] h-[320] rounded-[12px]"
              // className="w-[240px] h-[381px] min-w-[240px] gap-[16px] rounded-[8px]"
            />
            <div className="w-[240px] h-[45px]">{char.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
