import { notFound } from "next/navigation"
import { getByTypeSlug } from "@/lib/api/get-by-type-slug"
import { populatePages } from "./helpers"
import { LAYOUT_CONFIG } from "@/lib/constants/config"
import { lazy } from "react"
const Layout = lazy(() => import(`@/components/themes/${LAYOUT_CONFIG}/pages/route`))

export default async function SlugLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: {
		lang: string
		slug: string
	}
}) {
	const { slug, lang } = params
	const resData = await getByTypeSlug("/pages", slug, lang, populatePages)
	resData ?? console.log("🚀 ~ resData:", resData.data[0].attributes.cover.data)

	try {
		return <Layout params={params}>{children}</Layout>
	} catch (e: any) {
		// throw new Error(e)
		notFound()
	}
}
