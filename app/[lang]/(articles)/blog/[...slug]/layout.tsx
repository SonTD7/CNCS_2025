import { notFound } from "next/navigation"
import { LAYOUT_CONFIG } from "@/lib/constants/config";
import { getByTypeSlug } from "@/lib/api/get-by-type-slug";
import { populateArticles } from "./helpers";
import { lazy } from "react";

const Layout = lazy(() => import(`@/components/themes/${LAYOUT_CONFIG}/articles/route`))
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
        return <Layout> {children} </Layout>
    } catch (e: any) {
        // console.log("🚀 ~ e:", e)
        // throw new Error(e)
        notFound()
    }
}