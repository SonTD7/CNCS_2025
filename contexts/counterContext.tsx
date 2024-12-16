import React, { createContext, useContext, useState, ReactNode } from "react";

interface LangContextType {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

interface LangProviderProps {
  children: ReactNode;
}

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  const [counter, setCounter] = useState<number>(0);

  const increment = (): void => setCounter(counter + 1);
  const decrement = (): void => setCounter(counter - 1);

  return (
    <LangContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLanguage = (): LangContextType => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LangProvider");
  }
  return context;
};