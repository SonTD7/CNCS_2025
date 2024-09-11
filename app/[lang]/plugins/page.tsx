// import { Badge } from "@/components/ui/badge";
// import { ComboboxRoute } from "@/components/combox/combobox-route";
// import PluginsCard from "./plugin-card";


// export default function Plugins() {
//     return (
//         <>
//             <section className="choose flex justify-center items-center bg-sbglight relative">
//                 {/* <Grad
//                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
//                 /> */}
//                 <div className="container py-20">
//                     <div className="flex justify-center items-center">
//                         <blockquote className="note-content flex flex-col xl:flex-row space-x-5 xl:w-[550px] p-4 relative bg-white border border-gray-400 rounded-lg justify-center w-full">

//                             <div className="content-nnn text-sm xl:text-base/[1.6rem] relative text-center flex flex-col xl:flex-row justify-between items-center space-y-4  xl:space-y-0 xl:space-x-8">
//                                 <div> <Badge variant="notice" className="text-white">Gợi ý </Badge> Chọn lĩnh vực muốn biết:   </div>
//                                 <ComboboxRoute />
//                             </div>
//                         </blockquote>
//                     </div>
//                 </div>

//             </section>

//             <section className="category flex justify-center items-center overflow-hidden">


//                 <div className="container py-20 flex flex-col justify-between items-center  xl:grid xl:grid-cols-3 ">
//                     <PluginsCard />
//                     <PluginsCard />
//                     <PluginsCard />
//                     <PluginsCard />
//                     <PluginsCard />
//                     <PluginsCard />
//                 </div>

//             </section>
//         </>
//     );
// }

import { Metadata } from "next";
import { FALLBACK_SEO } from "@/app/[lang]/utils/constants";

import LangRedirect from "../components/LangRedirect"
import componentResolverRoute from './../utils/component-resolver-route';
import { getPageBySlug } from "@/app/[lang]/utils/get-page-by-slug";



type Props = {
    params: {
        lang: string,
        slug: string
    }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const page = await getPageBySlug(params.slug, params.lang);

    if (!page.data[0]?.seo) return FALLBACK_SEO;
    const metadata = page.data[0].seo

    return {
        title: metadata.metaTitle,
        description: metadata.metaDescription
    }
}


export default async function RootRoute({ params }: { params: { lang: string } }) {
    try {
        const populatePLugins = ['contentSections', 'contentSections.listlink'];
        const page = await getPageBySlug('plugins', params.lang, populatePLugins)

        if (page.error && page.error.status == 401)
            throw new Error(
                'Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/'
            )
        if (page.data.length == 0 && params.lang !== 'vi') return <LangRedirect />
        if (page.data.length === 0) return null
        const contentSections = page.data[0].contentSections
        return contentSections.map((section: any, index: number) =>
            componentResolverRoute(section, index, "plugins")
        )

    } catch (error: any) {
        if (typeof window !== "undefined") {
            window.alert('Missing or invalid credentials')
        }
    }
}
