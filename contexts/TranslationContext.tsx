"use client"
// TranslationContext.tsx
import React, { createContext, useContext, ReactNode } from "react"

// Định nghĩa kiểu dữ liệu cho dict
type Dict = {
	[key: string]: string
}

// Định nghĩa kiểu cho context
interface TranslationContextType {
	dict: Dict
	setDict: (dict: Dict) => void
}

// Tạo context với giá trị mặc định
const TranslationContext = createContext<TranslationContextType | undefined>(
	undefined
)

