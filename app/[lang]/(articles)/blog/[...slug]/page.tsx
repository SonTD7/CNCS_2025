import { Metadata } from "next";
import { FALLBACK_SEO } from "@/lib/constants/fallback";
import LangRedirect from "@/components/globals/LangRedirect"
import componentResolverRoute from '@/lib/utils/component-resolver-route';
import { notFound } from "next/navigation"
import { getByTypeSlug } from "@/lib/api/get-by-type-slug";
import { populateArticles } from "./helpers";

type Props = {
    params: {
        lang: string,
        slug: string
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const page = await getByTypeSlug("/articles", params.slug, params.lang, populateArticles);
    if (page ?? !page.data[0]?.seo) return FALLBACK_SEO;
    const metadata = page.data[0].seo

    return {
        title: metadata.metaTitle,
        description: metadata.metaDescription
    }
}

export default async function RootRoute({ params }: Props) {
    try {
        const page = await getByTypeSlug("/articles", params.slug, params.lang, populateArticles)
        if (page.error && page.error.status == 404)
            notFound()

        if (page.error && page.error.status == 401)
            throw new Error(
                'Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/'
            )
        if (page.data.length == 0 && params.lang !== 'vi') return <LangRedirect />
        if (page.data.length === 0) return null
        const contentSections = page.data[0].contentSections
        return contentSections.map((section: any, index: number) =>
            componentResolverRoute(section, index, "slug")
        )

    } catch (error: any) {
        typeof window !== "undefined" && window?.alert("Missing or invalid credentials")
    }
}