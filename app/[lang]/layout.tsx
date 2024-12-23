import { fetchAPI } from "@/app/[lang]/_utils/fetch-api"
import { i18n } from "@/i18n-config"
import { getDictionary } from "./get-dictionary"
import Smooth from "./_layout/smooth/smooth"
import Default from "./_layout/default/default"
import { LanguageProvider } from "@/contexts/LangContext"
const data: string = "1smooth"
const LAYOUT_CONFIG = data ?? "smooth"
console.log("🚀 ~ LAYOUT_CONFIG:", LAYOUT_CONFIG)

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

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: any //{ lang: string }
}>) {
	const dicts = await getDictionary(params.lang)

	return (
		<html lang={params.lang} suppressHydrationWarning>
			<body
				className={`antialiased dark:bg-slate-600 bg-popover text-popover-foreground`}
			>
				<LanguageProvider dicts={dicts} lang={params.lang}>
					{LAYOUT_CONFIG == "smooth" ? (
						<Smooth params={params.lang} dicts={dicts}>
							{children}
						</Smooth>
					) : (
						<Default params={params.lang} dicts={dicts}>
							{children}
						</Default>
					)}
				</LanguageProvider>
			</body>
		</html>
	)
}

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }))
}
