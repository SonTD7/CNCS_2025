import { Metadata } from "next"
import { FALLBACK_SEO } from "@/lib/constants/fallback"
import { getByTypeSlug } from "@/lib/api/get-by-type-slug"
import componentResolverRoute from "@/lib/utils/component-resolver-route"
import { populateHomeRe, dataSample, Props, layoutData } from "./helpers"
import { slugToComponentName } from "@/lib/utils/utils"

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

		const page = await getByTypeSlug("/pages", 'home', params.lang, populateHomeRe)

		if (page.error && page.error.status == 401) {
			throw new Error(
				"Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/"
			)
			return null
		}

		const contentSections = page?.data[0]?.attributes?.contentSections
		return contentSections ?
			contentSections.map((section: any, index: number) =>
				componentResolverRoute(section, index, "home")
			) :
			(
				<>
					{
						layoutData && layoutData.map((item, index) => {
							const Layout = slugToComponentName(item, "fallback/home", dataSample)
							return <Layout data={dataSample} key={index} />
						})
					}
				</>
			)
	} catch (error: any) {
		typeof window !== "undefined" && window?.alert("Missing or invalid credentials")
	}
}
