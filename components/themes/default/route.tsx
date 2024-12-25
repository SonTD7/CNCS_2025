import "@/globals.css"
import Footer from "./footer/footer"
import Loader from "./header/loader"
import Header from "./header/header"
import { cn } from "@/lib/utils/utils"
import AutoScrollTop from "@/lib/utils/auto-scroll-top"
import { fahkwang } from "@/lib/constants/fonts"

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
			<Header />
			{children}
			<Footer />
			<AutoScrollTop />
		</main>
	)
}
