import { Metadata } from "next"
import { FALLBACK_SEO, HOME_DATA } from "@/lib/constants/fallback"
import { getByTypeSlug } from "@/lib/api/get-by-type-slug"
import componentResolverRoute from "@/lib/utils/component-resolver-route"
import { populateHomeRe, Props } from "./helpers"
import { slugToComponentName } from "@/lib/utils/utils"
import { FALLBACK_CONFIG } from "@/lib/constants/config"

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const page = await getByTypeSlug('/pages', params.slug, params.lang);

	if (page ?? !page?.data?.[0]?.seo1) return FALLBACK_SEO;
	const metadata = page.data[0].seo

	return {
		title: metadata.metaTitle,
		description: metadata.metaDescription
	}
}

export default async function RootRoute({
	params,
}: {
	params: { lang: string }
}) {
	try {

		const page = await getByTypeSlug("/pages", 'home', params.lang, populateHomeRe)

		if (page?.error && !FALLBACK_CONFIG) {
			console.log(`have an error ${page?.error.message} status: ${page?.error.status}for getByTypeSlug`)
			throw new Error(
				page?.error.message
			)
		}

		const contentSections = page?.data?.[0]?.attributes?.contentSections
		return contentSections ?
			contentSections.map((section: any, index: number) =>
				componentResolverRoute(section, index, "home")
			) :
			HOME_DATA && HOME_DATA.map(({ name, data }, index) => {
				const Layout = slugToComponentName(name, "fallback/home", data)
				return <Layout data={data} key={index} />
			})

	} catch (error: any) {
		throw new Error(error.message)
	}
}
