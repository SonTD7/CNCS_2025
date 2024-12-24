import { notFound } from "next/navigation"
import { LAYOUT_CONFIG } from "@/lib/constants";
import Default from "./_layout/default/default";
import Awing from "./_layout/awing/awing";
import { getByTypeSlug } from "@/lib/get-by-type-slug";
import { populateArticles } from "./helpers";
export default async function SlugLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: {
        lang: string,
        slug: string
    }
}) {
    const { slug, lang } = params
    const resData = await getByTypeSlug("/articles", slug, lang, populateArticles)
    try {
        return (
            <>
                {
                    LAYOUT_CONFIG == "default" && <Default />
                }
                {
                    LAYOUT_CONFIG == "awing" && <Awing />
                }

            </>

        )
    } catch (e: any) {
        // console.log("🚀 ~ e:", e)
        // throw new Error(e)
        notFound()
    }
}