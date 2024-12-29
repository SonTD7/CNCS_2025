import { Metadata } from "next"
import { FALLBACK_SEO, PAGES_DATA } from "@/lib/constants/fallback"
import componentResolverRoute from "@/lib/utils/component-resolver-route"
import { getByTypeSlug } from "@/lib/api/get-by-type-slug"
import { notFound } from "next/navigation"
import { populatePages, Props } from "./helpers"
import { FALLBACK_CONFIG } from "@/lib/constants/config"
import { slugToComponentName } from "@/lib/utils/utils"

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const page = await getByTypeSlug("/pages", params.slug, params.lang)
	if (page ?? !page.data[0]?.seo) return FALLBACK_SEO
	const metadata = page.data[0].seo

	return {
		title: metadata.metaTitle,
		description: metadata.metaDescription,
	}
}

export default async function RootRoute({ params }: Props) {
	try {
		const page = await getByTypeSlug(
			"/pages",
			params.slug,
			params.lang,
			populatePages
		)

		if (page.error && page.error.status == 404) return notFound()
		if (page?.error && !FALLBACK_CONFIG) {
			console.log(`have an error ${page?.error.message} status: ${page?.error.status} on Page getByTypeSlug`)
			throw new Error(
				page?.error.message
			)
		}

		const slugFilter = PAGES_DATA.filter(({ slug }) => slug == params.slug)
		if (page?.error && page?.error.status === 404) {
			return notFound(); // Triggers the 404 page
		}

		const { __components } = slugFilter.length !== 0 ? slugFilter?.[0] : (PAGES_DATA.filter(({ slug }) => slug == "component-default"))?.[0]

		const contentSections = page?.data?.[0]?.attributes?.contentSections

		return contentSections
			? contentSections.map((section: any, index: number) =>
				componentResolverRoute(section, index, "pages")
			)
			: __components && __components.map(({ name, data }, index) => {
				const Layout = slugToComponentName(name, "fallback/pages", data)
				return <Layout data={data} key={index} />
			})

	} catch (error: any) {
		throw new Error(
			error.message
		)
	}
}