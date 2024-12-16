"use client"
import "@/globals.css"
import Footer from "@/app/[lang]/(footer)/footer"
import Loader from "@/app/[lang]/(header)/header-default/loader"
import Header from "@/app/[lang]/(header)/header-default/header"
import { Fahkwang } from "next/font/google"
import { cn } from "@/lib/utils"
import { fetchAPI } from "@/app/[lang]/utils/fetch-api"
import { i18n } from "@/i18n-config"
import AutoScrollTop from "../utils/auto-scroll-top"

const fahkwang = Fahkwang({
	subsets: ["vietnamese"],
	weight: ["200", "300", "400", "500", "600", "700"],
	display: "swap",
	fallback: ["system-ui", "arial"],
	variable: "--font-fahkwang",
})

async function getGlobal(lang: string): Promise<any> {
	const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN

	if (!token)
		throw new Error("The Strapi API Token environment variable is not set.")
	const path = `/global`
	const options = { headers: { Authorization: `Bearer ${token}` } }
	const urlParamsObject = {
		populate: [
			// "metadata.shareImage",
			// "favicon",
			// "notificationBanner.link",
			// "navbar.links",
			// "navbar.navbarLogo.logoImg",
			// "footer.footerLogo.logoImg",
			// "footer.menuLinks",
			// "footer.legalLinks",
			// "footer.socialLinks",
			// "footer.categories",
		],
		locale: lang,
	}
	return await fetchAPI(path, urlParamsObject, options)
}

export default function RootLayout({
	children,
	params,
	dicts
}: Readonly<{
	children: React.ReactNode
	params: { lang: string },
	dicts: any
}>) {
	
	return (
		<html lang={params.lang} suppressHydrationWarning>
			<body
				className={`antialiased dark:bg-slate-600 bg-popover text-popover-foreground`}
			>
				<main
					className={cn(
						fahkwang.className,
						"1pt-20 main-ele dark:bg-slate-600"
					)}
					id="main"
				>
					<Loader locale={params.lang} dicts={dicts} />
					<Header />
					{children}
					<Footer locale={params.lang} dicts={dicts} />
					<AutoScrollTop />
				</main>
			</body>
		</html>
	)
}

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }))
}
