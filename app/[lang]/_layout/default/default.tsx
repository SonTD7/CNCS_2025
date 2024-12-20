import "@/globals.css"
import Footer from "./footer/footer"
import Loader from "./header/loader"
import Header from "./header/header"
import { cn } from "@/lib/utils"
import AutoScrollTop from "../../_utils/auto-scroll-top"
import { Fahkwang } from "next/font/google"
import HomeBanner from "../../_components/home/HomeBanner"
import HomeHero from "../../_components/home/HomeHero"
import VideoEmbed from "../../_components/VideoEmbed"

const fahkwang = Fahkwang({
	subsets: ["vietnamese"],
	weight: ["200", "300", "400", "500", "600", "700"],
	display: "swap",
	fallback: ["system-ui", "arial"],
	variable: "--font-fahkwang",
})
const dataSample = {
	id: 1,
	url: "https://www.youtube.com/watch?v=Qr7Ng6fpqnk",
	width: "100%",
	height: "100%"
  }
  

export default function Default({
	children,
	params,
	dicts,
}: Readonly<{
	children: React.ReactNode
	params: { lang: string }
	dicts: any
}>) {
	return (
		<main
			className={cn(
				fahkwang.className,
				"pt-20 main-ele dark:bg-slate-600 bg-popover text-popover-foreground"
			)}
			id="main"
			>
			<Loader locale={params.lang} dicts={dicts} />
			<Header locale={params.lang} dicts={dicts} />
			{/* <HomeBanner />
			<VideoEmbed data={dataSample}/>
			<HomeHero /> */}
			
			{children}
			<Footer locale={params.lang} dicts={dicts} />
			<AutoScrollTop />
		</main>
	)
}
