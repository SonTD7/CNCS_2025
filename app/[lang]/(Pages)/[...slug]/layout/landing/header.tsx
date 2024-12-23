import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { getStrapiMedia } from "../../../../_utils/api-helpers"
import { League_Spartan } from "next/font/google";
import { cn } from "@/lib/utils"
import DOMPurify from "isomorphic-dompurify";
interface Cover {
    id: number
    url: string
}

type props = {
    id: number
    title: string
    description: string
    slug: string
    cover: Cover
    headerCover: Cover
}
const sanitizer = DOMPurify.sanitize;

const inter = League_Spartan({
    subsets: ['vietnamese'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    display: 'swap',
    fallback: ['system-ui', 'arial'],
    variable: '--font-fahkwang'
})

export default function Header({ data }: { data: props }) {

    const { title, description, headerCover } = data
    const coverUrl = headerCover && getStrapiMedia(headerCover.url)

    return (
        <header>
            <div className="bg-indigo-500 text-center overflow-hidden relative dark:bg-slate-800">
                <div className="header-box container xl:px-0 xl:max-w-[850px] mx-auto  1xl:max-w-screen-lg flex flex-col items-center justify-around h-full">
                    <div className="entry__meta border-b border-white/20 flex flex-col items-center justify-evenly space-y-5 py-16 pb-6 w-full">
                        <p className="text-center text-lg xl:text-lg font-bold text-white">Strapi deploy Ubuntu</p>
                        <h1 className="text-3xl/[1.8] xl:text-4xl/snug text-center font-light text-white">{title}
                        </h1>
                        <div className="box-info flex space-x-6 items-center text-sm justify-around">
                            <div className="box-author flex space-x-2 items-center">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage className="h-8 w-8" src="https://maivietson.com/images/logo.jpeg" />
                                    <AvatarFallback>S</AvatarFallback>
                                </Avatar>
                                <span className="text-white text-xs xl:text-sm">
                                    Viết bởi <span className="underline text-clip text-nowrap">Mai Việt Sơn</span>
                                </span>
                            </div>
                            <time dateTime="2024-08-06T09:49:10" className="text-white text-center text-xs xl:text-sm before:absolute before:w-[1px] before:-left-3 before:top-[1px] before:bottom-[1px] before:content-[''] before:bg-white relative">
                                Last updated, Aug. 06, 2024
                            </time>
                            <p className="text-white text-xs xl:text-sm before:absolute before:w-[1px] before:-left-3 before:top-[1px] before:bottom-[1px] before:content-[''] before:bg-white relative ">Viết cùng: Lotusa</p>
                        </div>
                    </div>
                    <article className={cn(
                        "entry__description grid xl:grid-cols-2 text-left space-x-4 py-10 xl:py-12 text-white font-light",
                        inter.className
                    )}>
                        <div className="description text-xl/[1.8] xl:text-2xl/[1.8]" dangerouslySetInnerHTML={{ __html: sanitizer(description)}}></div>
                        <figure className="desc-article">
                            <picture>
                                <Image
                                    className="rounded-md z-10 relative xl:max-w-full"
                                    src={coverUrl ? coverUrl : ""}
                                    width="768"
                                    height="402"
                                    alt="title"
                                />
                            </picture>
                        </figure>
                    </article>
                </div>
            </div>
        </header>
    );
}