import { i18n } from "@/i18n-config"
import { getDictionary } from "@/dictionaries/get-dictionary"
import { LanguageProvider } from "@/contexts/lang-context"
import { LAYOUT_CONFIG } from "@/lib/constants/config"
import dynamic from "next/dynamic"

const Layout = dynamic<{
	children: React.ReactNode;
	params?: string;
	dicts?: string;
}>(() => import(`@/components/themes/${LAYOUT_CONFIG}/controller`))

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
					<Layout params={params.lang} dicts={dicts}> {children} </Layout>
				</LanguageProvider>
			</body>
		</html>
	)
}

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }))
}