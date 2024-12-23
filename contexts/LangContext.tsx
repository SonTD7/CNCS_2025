"use client"
import React, { createContext, useContext, useEffect, useState } from "react"

interface LanguageContextType {
	language: string
	translations: any //{ [key: string]: string };
	//   switchLanguage: (lang: string) => void;
}

const LanguageContext = createContext<any | undefined>(undefined)

export function LanguageProvider({
	children,
	dicts,
	lang,
}: {
	children: React.ReactNode
	dicts: any
	lang: string
}) {
	const [translations, setTranslations] = useState<any>({})

	useEffect(() => {
		setTranslations(dicts)
	}, [lang])
	return (
		<LanguageContext.Provider value={{ lang, translations }}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = () => {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider")
	}
	return context
}
