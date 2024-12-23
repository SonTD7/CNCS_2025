import { Metadata } from "next";
import { FALLBACK_SEO } from "@/app/[lang]/_utils/constants";
import LangRedirect from "../../../_components/LangRedirect"
import componentResolverRouteLayout from '../../../_utils/component-resolver-route-layout';
import { getArticleBySlug } from "@/app/[lang]/_utils/get-article-by-slug";
import { notFound } from "next/navigation"

type Props = {
    params: {
        lang: string,
        slug: string
    }
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//     const page = await getArticleBySlug(params.slug, params.lang);
//     if (!page.data[0]?.seo) return FALLBACK_SEO;
//     const metadata = page.data[0].seo

//     return {
//         title: metadata.metaTitle,
//         description: metadata.metaDescription
//     }
// }

export default async function RootRoute({ params }: Props) {
    try {
        const populateArticles = {
            contentSections: {
                on: {
                    'sections.article-section': {
                        populate: '*'
                    },
                    'sections.landing-section-chapter': {
                        populate: {
                            'chapterContents': {
                                populate: "*"
                            },
                            'chapterImage': {
                                populate: '*'
                            }
                        }
                    },
                    'sections.landing-section-conslusion': {
                        populate: "*"
                    }
                }
            },
            categories:  {
                populate: ['article']
            }
            
        }

        const page = await getArticleBySlug(params.slug, params.lang, populateArticles)
        if (page.error && page.error.status == 404)
            notFound()
            
        if (page.error && page.error.status == 401)
            throw new Error(
                'Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/'
            )
        if (page.data.length == 0 && params.lang !== 'vi') return <LangRedirect />
        if (page.data.length === 0) return null
        const contentSections = page.data[0].contentSections
        const { postLayout } = page.data[0]
        return contentSections.map((section: any, index: number) =>
            componentResolverRouteLayout(section, index, "slug", postLayout)
        )

    } catch (error: any) {
        if (typeof window !== "undefined") {
            window.alert('Missing or invalid credentials')
        }
    }
}