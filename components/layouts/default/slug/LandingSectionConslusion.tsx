import Image from "next/image"
import { getStrapiMedia } from "@/lib/api-helpers"
import { League_Spartan } from "next/font/google";
import { cn } from "@/lib/utils"
import DOMPurify from "isomorphic-dompurify";

interface Cover {
    id: number
    url: string
}
interface props {
    id: number
    conslusionDescription: string
    conslusionTitle: string
    conslusionImage: Cover
}

const sanitizer = DOMPurify.sanitize;

const inter = League_Spartan({
    subsets: ['vietnamese'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    display: 'swap',
    fallback: ['system-ui', 'arial'],
    variable: '--font-fahkwang'
})

export default function LandingSectionConslusion({ data }: { data: props }) {
    const { conslusionTitle, conslusionDescription, conslusionImage } = data
    const coverUrl = conslusionImage && getStrapiMedia(conslusionImage.url)

    return (
        <>
            <div  className="bg-indigo-500 text-center overflow-hidden relative dark:bg-slate-800">
                <div className="header-box 1container xl:max-w-[850px] mx-auto  1xl:max-w-screen-lg flex flex-col items-center justify-around h-full">
                    <div className="entry__meta border-b border-white/20 flex flex-col items-center justify-evenly space-y-5 py-16 pb-6 w-full">
                        <h2 className="text-2xl/snug xl:text-4xl/snug text-center font-bold text-white">{conslusionTitle}
                        </h2>
                    </div>
                    <article className={cn(
                        "entry__description grid xl:grid-cols-2 text-left space-x-4 py-10 xl:py-12 text-white font-light container xl:px-0",
                        inter.className
                    )}>
                        <div className="description text-xl/[1.8] xl:text-2xl/[1.8]" dangerouslySetInnerHTML={{ __html: sanitizer(conslusionDescription)}}></div>
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
        </>
    );
}