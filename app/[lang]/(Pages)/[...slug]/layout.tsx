import { notFound } from "next/navigation"
import { getByTypeSlug } from "../../_utils/get-by-type-slug"
import { populatePages, LAYOUT_CONFIG } from "./helpers"
import Default from "./_layout/default/default"
import Awing from "./_layout/awing/awing"

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
		return (
			<>
				{LAYOUT_CONFIG == "default" ? 
					<Default params={params} children={children}/>
				 :  <Awing params={params} children={children}/> 
                }
			</>
		)
	} catch (e: any) {
		// throw new Error(e)
		notFound()
	}
}
