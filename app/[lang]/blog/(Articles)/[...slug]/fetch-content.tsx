import LangRedirect from "../../../_components/LangRedirect"
import componentResolverRoute from '../../../_utils/component-resolver-route';
import { getArticleBySlug } from "@/app/[lang]/_utils/get-article-by-slug";

type Props = {
    params: {
        lang: string,
        slug: string
    }
}

export default async function RootRoute({ params }: Props) {
    try {
        const populateHomeRe = {
            contentSections: {
                on: {
                    'sections.article-section': {
                        populate: '*'
                    }
                }
            }
        }

        const page = await getArticleBySlug(params.slug, params.lang, populateHomeRe)
        // console.log(page.data[0].contentSections);

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
        // if (typeof window !== "undefined") {
        //     window.alert('Missing or invalid credentials')
        // }
    }
}