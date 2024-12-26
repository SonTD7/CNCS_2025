import { notFound } from "next/navigation"
import { LAYOUT_CONFIG } from "@/lib/constants/config";
import { getByTypeSlug } from "@/lib/api/get-by-type-slug";
import { populateArticles } from "./helpers";
import React from "react";
import dynamic from "next/dynamic";
const Layout = dynamic<{
    children: React.ReactNode
}>(() => import(`@/components/themes/${LAYOUT_CONFIG}/articles/route`))
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
        // throw new Error(e)
        notFound()
    }
}