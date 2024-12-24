import { fetchAPI } from "@/lib/fetch-api"
import { i18n } from "@/i18n-config"
import { getDictionary } from "@/dictionaries/get-dictionary"
import Smooth from "@/components/layouts/smooth/smooth"
import Default from "@/components/layouts/default/default"
import { LanguageProvider } from "@/contexts/LangContext"
import { LAYOUT_CONFIG } from "@/lib/constants"
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
