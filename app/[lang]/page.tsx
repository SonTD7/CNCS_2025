import { Metadata } from "next"
import { FALLBACK_SEO } from "@/lib/constants"
import LangRedirect from "@/components/LangRedirect"
import { getByTypeSlug } from "../../lib/get-by-type-slug"
import componentResolverRoute from "../../lib/component-resolver-route"
import HomeBanner from "../../components/layouts/default/home/HomeBanner"
import VideoEmbed from "../../components/layouts/default/home/VideoEmbed"
import HomeHero from "../../components/layouts/default/home/HomeHero"
import { populateHomeRe, dataSample, Props } from "./helpers"
const CONFIG_DEMO = true

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const page = await getByTypeSlug('/pages', params.slug, params.lang);

	if (page ?? !page.data[0]?.seo1) return FALLBACK_SEO;
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
		return (
			<>
				<HomeBanner />
				<VideoEmbed data={dataSample} />
				<HomeHero />
			</>
		)

		const page = await getByTypeSlug("/pages", 'home', params.lang, populateHomeRe)
		console.log("🚀 ~ page:", page.data[0].attributes.cover)

		return null
		// const page = await getPageBySlug("home", params.lang, populateHomeRe)

		// if (page.error && page.error.status == 401) {
		// 	throw new Error(
		// 		"Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/"
		// 	)
		// 	return null
		// }

		// if (page.data.length == 0 && params.lang !== "vi")
		// 	return <LangRedirect />
		// if (page.data.length === 0) return <SamepleData /> //null
		const contentSections = page.data[0].attributes.contentSections
		return contentSections.map((section: any, index: number) =>
			componentResolverRoute(section, index, "home")
		)
	} catch (error: any) {
		if (typeof window !== "undefined") {
			window.alert("Missing or invalid credentials")
		}
	}
}
