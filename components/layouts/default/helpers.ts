import { Fahkwang } from "next/font/google"

export const fahkwang = Fahkwang({
	subsets: ["vietnamese"],
	weight: ["200", "300", "400", "500", "600", "700"],
	display: "swap",
	fallback: ["system-ui", "arial"],
	variable: "--font-fahkwang",
})