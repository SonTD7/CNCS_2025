// src/contexts/DictContext.tsx
"use client"
import React, { createContext, useContext, useState, ReactNode } from "react"

type DictContextType = {
	dict: any
	setDict: (dict: any) => void
}

const DictContext = createContext<DictContextType | undefined>(undefined)

export const DictProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [dict, setDict] = useState<string>() 

	return (
		<DictContext.Provider value={{ dict, setDict }}>
			{children}
		</DictContext.Provider>
	)
}

export const useDict = (): DictContextType => {
	const context = useContext(DictContext)
	if (!context) {
		throw new Error("useDict must be used within a DictProvider")
	}
	return context
}
