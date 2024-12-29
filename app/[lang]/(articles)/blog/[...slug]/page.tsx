import { Metadata } from "next"
import { FALLBACK_SEO, ARTICLE_DATA } from "@/lib/constants/fallback"
import componentResolverRoute from "@/lib/utils/component-resolver-route"
import { getByTypeSlug } from "@/lib/api/get-by-type-slug"
import { notFound } from "next/navigation"
import { populateArticles, articleProps } from "./helpers"
import { FALLBACK_CONFIG } from "@/lib/constants/config"
import { slugToComponentName } from "@/lib/utils/utils"

export async function generateMetadata({ params }: articleProps): Promise<Metadata> {
    const page = await getByTypeSlug("/articles", params.slug, params.lang)
    if (page ?? !page.data[0]?.seo) return FALLBACK_SEO
    const metadata = page.data[0].seo

    return {
        title: metadata.metaTitle,
        description: metadata.metaDescription,
    }
}

export default async function RootRoute({ params }: articleProps) {
    try {
        const page = await getByTypeSlug(
            "/articles",
            params.slug,
            params.lang,
            populateArticles
        )

        if (page.error && page.error.status == 404) return notFound()
        if (page?.error && !FALLBACK_CONFIG) {
            console.log(`have an error ${page?.error.message} status: ${page?.error.status} on Articles getByTypeSlug`)
            throw new Error(
                page?.error.message
            )
        }

        const slugFilter = ARTICLE_DATA.filter(({ slug }) => slug == params.slug)

        const { __components } = slugFilter.length !== 0 ? slugFilter?.[0] : (ARTICLE_DATA.filter(({ slug }) => slug == "component-default"))?.[0]

        const contentSections = page?.data?.[0]?.attributes?.contentSections

        return contentSections
            ? contentSections.map((section: any, index: number) =>
                componentResolverRoute(section, index, "articles")
            )
            : __components && __components.map(({ name, data }, index) => {
                const Layout = slugToComponentName(name, "fallback/articles", data)
                return <Layout data={data} key={index} />
            })

    } catch (error: any) {
        throw new Error(
            error.message
        )
    }
}

