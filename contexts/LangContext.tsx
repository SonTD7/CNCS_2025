import { createContext } from "react";

interface LangContextType {
    key: string

}
export const LangContext = createContext(null);