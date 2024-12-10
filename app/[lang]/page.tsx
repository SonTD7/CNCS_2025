
import { Metadata } from "next";
import { FALLBACK_SEO } from "@/app/[lang]/utils/constants";
import LangRedirect from "./components/LangRedirect"
import { getPageBySlug } from "@/app/[lang]/utils/get-page-by-slug";
import componentResolverRoute from './utils/component-resolver-route';
import SamepleData from "./(home)/sample-data";

type Props = {
  params: {
    lang: string,
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getPageBySlug(params.slug, params.lang);

  if (!page.data[0]?.seo1) return FALLBACK_SEO;
  const metadata = page.data[0].seo

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription
  }
}

export default async function RootRoute({ params }: { params: { lang: string } }) {
  try {
    const populateHomeRe = {
      contentSections: {
        on: {
          'sections.home-banner': {
            populate: ['listlink']
          },
          'sections.grid-with-features': {
            populate: {
              'listpost': {
                populate: {
                  'page': {
                    populate: '*'
                  },
                  'article': {
                    populate: '*'
                  },
                }
              },
              'features': {
                populate: {
                  'page': {
                    populate: '*'
                  },
                  'article': {
                    populate: '*'
                  },
                }
              }
            }
          },
          'sections.grid-basic': {
            populate: {
              'listpost': {
                populate: {
                  'page': {
                    populate: '*'
                  },
                  'article': {
                    populate: '*'
                  },
                }
              }
            }
          },
          'sections.route-box': {
            populate: '*'
          },
          'sections.grid-hub': {
            populate: {
              'resource': {
                populate: {
                  'cover': {
                    populate: '*'
                  },
                  'listpost': {
                    populate: {
                      'page': {
                        populate: '*'
                      },
                      'article': {
                        populate: '*'
                      },
                    }
                  }
                }
              },

            }
          }
        }
      }
    }

    const page = await getPageBySlug('home1', params.lang, populateHomeRe)

    if (page.error && page.error.status == 401) {
      throw new Error(
        'Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/'
      )
      return null
    }
      
    if (page.data.length == 0 && params.lang !== 'vi') return <LangRedirect />
    if (page.data.length === 0) return <SamepleData /> //null
    const contentSections = page.data[0].contentSections
    return contentSections.map((section: any, index: number) =>
      componentResolverRoute(section, index, "home")
    )

  } catch (error: any) {
    if (typeof window !== "undefined") {
      window.alert('Missing or invalid credentials')
    }
  }
}
