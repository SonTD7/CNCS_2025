"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

// Định nghĩa loại dữ liệu cho ngôn ngữ
interface LanguageContextType {
//   language: string;
  translations:  any//{ [key: string]: string };
//   switchLanguage: (lang: string) => void;
}

// Tạo context với default value
// const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const LanguageContext = createContext<any | undefined>(undefined);


// Provider component
export function LanguageProvider({
    children,
    dicts,
    lang
}: {
    children: React.ReactNode,
    dicts: any
    lang: string
}) {
    const [translations, setTranslations] = useState<any>({});

    useEffect(() => {

        setTranslations(dicts);
    
      }, [lang]);
      return (
        <LanguageContext.Provider value={{ translations }}>
          {children}
        </LanguageContext.Provider>
      );
}



// Hook để sử dụng context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
