"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface ActiveCharacterContextType {
  activeCharacterId: string | null;
  setActiveCharacterId: (id: string | null) => void;
  onChangeId?: (id: string | null) => void;
  setOnChangeId: (fn: (id: string | null) => void) => void;
}

const ActiveCharacterContext = createContext<
  ActiveCharacterContextType | undefined
>(undefined);

export const ActiveCharacterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeCharacterId, setActiveCharacterId] = useState<string | null>(
    null
  );
  const [onChangeId, _setOnChangeId] = useState<
    ((id: string | null) => void) | undefined
  >();

  const setOnChangeId = useCallback((fn: (id: string | null) => void) => {
    _setOnChangeId(() => fn);
  }, []);

  return (
    <ActiveCharacterContext.Provider
      value={{
        activeCharacterId,
        setActiveCharacterId,
        onChangeId,
        setOnChangeId,
      }}
    >
      {children}
    </ActiveCharacterContext.Provider>
  );
};

export const useActiveCharacter = () => {
  const context = useContext(ActiveCharacterContext);
  if (!context) {
    throw new Error(
      "useActiveCharacter deve ser usado dentro do ActiveCharacterProvider"
    );
  }
  return context;
};
