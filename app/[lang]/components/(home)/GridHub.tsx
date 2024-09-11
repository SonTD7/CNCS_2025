import ResouceItem from "../../(home)/(section)/(resouces)/resource-item"
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";

interface Img {
    url: string
    title: string
    alt: string
    description: string
    caption: string
}
interface document {
    id: number,
    locale: string,
    shortName: string,
    slug: string,
    title: string,
    cover: cover
}
interface cover {
    url: string
}
interface Posts {
    id: number,
    isPage: boolean,
    page: document,
    article: document
}
interface Resource {
    title: string
    subHeading: string
    description: string
    bgColor: string
    cover: Img
    colorFill: string
    colorText: string
    colorBase: string
    listpost: Posts[]
}

interface Hubs {
    title: string,
    subHeading: string
    resource: Resource[]
}


export default function GridHub({ data }: { data: Hubs }) {
    const { title, subHeading, resource } = data
    // console.log(resource)

    return (

        <section className="resource-hubs relative h-full bg-slate-100 dark:bg-slate-700 flex flex-col space-y-5 xl:space-y-10">
            <div className="header-resouces flex justify-center items-center py-10 pb-0 xl:py-10 xl:pb-0 dark:text-white">
                <h2 className="font-bold text-xl xl:text-4xl text-indigo-700 dark:text-white text-center fahkwang-bold">
                    {title} <br /> <span className="text-lg xl:text-2xl text-gray-500 dark:text-white font-normal italic ">{subHeading}</span>
                </h2>
            </div>
            <div className="container py-5 xl:py-10">
                <div className="list-resouces flex flex-col space-y-10">

                    {
                        resource.map((item, index) => {
                            const title = item && item.title
                            const colorBase = item && item.bgColor
                            const bgColor = item && `bg-[${item.bgColor.toUpperCase()}]`
                            const colorFill = item && item.bgColor.toUpperCase()
                            const colorText = item && `text-[${item.bgColor.toUpperCase()}]`
                            const coverUrl = item && getStrapiMedia(item.cover.url)
                            const listpost = item && item.listpost
                            return (
                                <ResouceItem

                                    title={title}
                                    subHeading= {item && item.subHeading}
                                    description={item && item.description}
                                    bgColor={bgColor}
                                    img={coverUrl? coverUrl : ""}
                                    colorFill={colorFill}
                                    colorText={colorText}
                                    colorBase={colorBase}
                                    listpost={listpost}
                                    key={index}
                                />
                            )
                        })
                    }

                    {/* <ResouceItem
                        title="SEO Market"
                        bgColor="bg-[#4338CA]"
                        img="https://api.backlinko.com/app/uploads/2020/05/seo-fundamentals.svg"
                        colorFill="#4338ca"
                        colorText="text-[#4338ca]"
                    />

                    <ResouceItem
                        title="Flatsome"
                        bgColor="bg-sky-500"
                        img="https://api.backlinko.com/app/uploads/2020/05/link-building-for-seo.svg"
                        colorFill="#0ea5e9"
                        colorText="text-[#0ea5e9]"
                    />

                    <ResouceItem
                        title="Plugins Wordpress"
                        bgColor="bg-red-600"
                        img="https://api.backlinko.com/app/uploads/2019/11/written-content.svg"
                        colorFill="#dc2626"
                        colorText="text-[#dc2626]"
                    />

                    <ResouceItem
                        title="Tools Miễn phí"
                        bgColor="bg-emerald-600"
                        img="https://api.backlinko.com/app/uploads/2024/09/chapter-double-down-on-video-content.png"
                        colorFill="#10b981"
                        colorText="text-[#10b981]"
                    /> */}
                </div>
            </div>
        </section>

    );
}