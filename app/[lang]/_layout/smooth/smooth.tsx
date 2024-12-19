import "@/globals.css"
import Footer from "./footer/footer"
import Loader from "./header/loader"
import Header from "./header/header"
import AnimatedCursor from "react-animated-cursor"
import { cn } from "@/lib/utils"
import AutoScrollTop from "../../_utils/auto-scroll-top"
import { Fahkwang } from "next/font/google"

const fahkwang = Fahkwang({
	subsets: ["vietnamese"],
	weight: ["200", "300", "400", "500", "600", "700"],
	display: "swap",
	fallback: ["system-ui", "arial"],
	variable: "--font-fahkwang",
})

export default function Smooth({
	children,
	params,
	dicts,
}: Readonly<{
	children: React.ReactNode
	params: { lang: string }
	dicts: any
}>) {
	return (
		<>
			<AnimatedCursor
				innerSize={0}
				outerSize={12}
				color="0, 0, 0"
				showSystemCursor={true}
				outerAlpha={0.34}
				innerScale={0.7}
				outerScale={5}
				clickables={[
					"a",
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					"label[for]",
					"select",
					"textarea",
					"button",
					".link",
				]}
			/>
			<main
				className={cn(
					fahkwang.className,
					"pt-20 main-ele dark:bg-slate-600 bg-popover text-popover-foreground"
				)}
				id="main"
			>
				<Loader locale={params.lang} dicts={dicts} />
				<Header locale={params.lang} dicts={dicts} />
				{children}
				<Footer locale={params.lang} dicts={dicts} />
				<AutoScrollTop />
			</main>
		</>
	)
}
