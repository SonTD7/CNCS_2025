import { Metadata } from "next"
import { FALLBACK_SEO } from "@/lib/constants"
import LangRedirect from "../../../../components/LangRedirect"
import componentResolverRoute from "../../../../lib/component-resolver-route"
import { getByTypeSlug } from "../../../../lib/get-by-type-slug"
import { notFound } from "next/navigation"
import { populatePages } from "./helpers"
type Props = {
	params: {
		lang: string
		slug: string
	}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const page = await getByTypeSlug("pages", params.slug, params.lang)
	if (page ?? !page.data[0]?.seo) return FALLBACK_SEO
	const metadata = page.data[0].seo

	return {
		title: metadata.metaTitle,
		description: metadata.metaDescription,
	}
}

export default async function RootRoute({ params }: Props) {
	try {
		return <p>child nay</p>
		const page = await getByTypeSlug(
			"/pages",
			params.slug,
			params.lang,
			populatePages
		)
		if (page.error && page.error.status == 404) notFound()

		if (page.error && page.error.status == 401)
			throw new Error(
				"Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/"
			)
		// if (page.data.length == 0 && params.lang !== "vi")
		// 	return <LangRedirect />
		if (page.data.length === 0) return null
		const contentSections = page.data[0].contentSections
		const { postLayout } = page.data[0]
		return contentSections.map((section: any, index: number) =>
			componentResolverRoute(section, index, "pages")
		)
	} catch (error: any) {
		if (typeof window !== "undefined") {
			window.alert("Missing or invalid credentials")
		}
	}
}
