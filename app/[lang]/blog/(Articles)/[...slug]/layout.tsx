import Hotlanding from "./_layout/landing/hot-landing"
import Blogarticle from "./_layout/article/blog-article"
import { fetchAPI } from "@/app/[lang]/_utils/fetch-api";
import Categories from "./categories";
import { notFound } from "next/navigation"

async function getPostBySlug(slug: string, lang: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/articles`;
    const urlParamsObject = {
        filters: { slug },
        locale: lang,
        populate: {
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
            'cover': {
                fields: ['url']
            },
            'headerCover': {
                fields: ['url']
            },
            categories: {
                populate: ['article']
            }
        },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response;
}

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
    const resData = await getPostBySlug(slug, lang)
    try {
        const { postLayout, categories } = resData.data[0]
        return (
            <>
                {postLayout && postLayout !== 'blogArticle' ?
                    (<Hotlanding data={resData.data[0]} children={children} />) :
                    (<>
                        <Blogarticle data={resData.data[0]} children={children} />
                       <Categories categories={categories}/>
                    </>
                    )
                }

            </>

        )
    } catch (e: any) {
        // console.log("🚀 ~ e:", e)
        // throw new Error(e)
        notFound()
    }
}