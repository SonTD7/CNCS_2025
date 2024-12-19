"use client"
import { useEffect, useState } from "react"
import { SvgDark } from "./svg-dark"
import { SvgLight } from "./svg-light"
import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile,
	isSafari,
} from "react-device-detect"

export default function DarkMode() {
	const [isDark, setIsDark] = useState(false)
	const [isDisabled, setIsDisabled] = useState(false)
	useEffect(() => {
		setIsDisabled(isSafari)
		const darkMode = localStorage.getItem("dark-mode") === "true"
		setIsDark(darkMode)
		if (darkMode) {
			document.documentElement.classList.add("dark")
		}
	}, [])

	const toggleTheme = () => {
		const newIsDark = !isDark
		setIsDark(newIsDark)
		document.documentElement.classList.toggle("dark", newIsDark)
		localStorage.setItem("dark-mode", newIsDark.toString())
	}

	return (
		<div className="w-full mx-auto relative">
			<button
				onClick={toggleTheme}
				id="theme-toggle"
				data-tooltip-target="tooltip-toggle"
				type="button"
				className="ml-2 text-gray-500 inline-flex items-center justify-center dark:text-gray-400 hover:bg-gray-100 w-8 h-8 dark:hover:bg-gray-700 dark:bg-black focus:outline-none ring-1 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 ring-slate-300 rounded-full text-sm p-2 disabled:cursor-not-allowed"
				disabled={isDisabled}
			>
				{!isDark ? <SvgDark /> : <SvgLight />}
				<span className="sr-only">Toggle dark mode</span>
			</button>
			{isSafari ?? (
				<span className="absolute top-10 scale-0 transition-all w-44 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 -left-12">
					✨ Tính năng không có trên safari bản cũ!
				</span>
			)}
		</div>
	)
}
