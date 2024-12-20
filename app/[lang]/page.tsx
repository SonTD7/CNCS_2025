import { Metadata } from "next"
import { FALLBACK_SEO } from "@/app/[lang]/_utils/constants"
import LangRedirect from "./_components/LangRedirect"
import { getPageBySlug } from "@/app/[lang]/_utils/get-page-by-slug"
import componentResolverRoute from "./_utils/component-resolver-route"
import SamepleData from "./(Pages)/sample-data"
import HomeBanner from "./_components/home/HomeBanner"
import VideoEmbed from "./_components/VideoEmbed"
import HomeHero from "./_components/home/HomeHero"
const CONFIG_DEMO = true
const dataSample = {
	id: 1,
	url: "https://www.youtube.com/watch?v=Qr7Ng6fpqnk",
	width: "100%",
	height: "100%",
}

type Props = {
	params: {
		lang: string
		slug: string
	}
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const page = await getPageBySlug(params.slug, params.lang);

//   if (!page.data[0]?.seo1) return FALLBACK_SEO;
//   const metadata = page.data[0].seo

//   return {
//     title: metadata.metaTitle,
//     description: metadata.metaDescription
//   }
// }

export default async function RootRoute({
	params,
}: {
	params: { lang: string }
}) {
	try {
		const populateHomeRe = {
			contentSections: {
				on: {
					"sections.home-banner": {
						populate: ["listlink"],
					},
					"sections.grid-with-features": {
						populate: {
							listpost: {
								populate: {
									page: {
										populate: "*",
									},
									article: {
										populate: "*",
									},
								},
							},
							features: {
								populate: {
									page: {
										populate: "*",
									},
									article: {
										populate: "*",
									},
								},
							},
						},
					},
					"sections.grid-basic": {
						populate: {
							listpost: {
								populate: {
									page: {
										populate: "*",
									},
									article: {
										populate: "*",
									},
								},
							},
						},
					},
					"sections.route-box": {
						populate: "*",
					},
					"sections.grid-hub": {
						populate: {
							resource: {
								populate: {
									cover: {
										populate: "*",
									},
									listpost: {
										populate: {
											page: {
												populate: "*",
											},
											article: {
												populate: "*",
											},
										},
									},
								},
							},
						},
					},
				},
			},
		}

    return (
			<>
				<HomeBanner />
				<VideoEmbed data={dataSample} />
				<HomeHero />
			</>
		)

		const page = await getPageBySlug("home", params.lang, populateHomeRe)
		console.log("🚀 ~ RootRoute ~ page:", page)

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
		return !CONFIG_DEMO ? (
			contentSections.map((section: any, index: number) =>
				componentResolverRoute(section, index, "home")
			)
		) : (
			<>
				<HomeBanner />
				<VideoEmbed data={dataSample} />
				<HomeHero />
			</>
		)
	} catch (error: any) {
		if (typeof window !== "undefined") {
			window.alert("Missing or invalid credentials")
		}
	}
}
