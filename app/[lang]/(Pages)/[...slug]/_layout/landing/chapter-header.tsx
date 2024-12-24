import Image from "next/image"
import { getStrapiMedia } from "../../../../../../lib/api-helpers"
import { League_Spartan } from "next/font/google";
import { cn } from "@/lib/utils"
import DOMPurify from "isomorphic-dompurify";

interface Cover {
    id: number
    url: string
}

interface Child {
    text: string
    type: string
}

interface Content {
    type: string
    children: Child[]
}

interface ChapterContent {
    id: number
    layoutSection: string
}

interface props {
    id: number
    chapterNumber: number
    chapterDescription: string
    chapterTitle: string
    contents: Content[]
    content: string
    chapterImage: Cover
    chapterContents: ChapterContent[]
}

const sanitizer = DOMPurify.sanitize;
const inter = League_Spartan({
    subsets: ['vietnamese'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    display: 'swap',
    fallback: ['system-ui', 'arial'],
    variable: '--font-fahkwang'
})

export default function ChapterHeader({ data }: { data: props }) {
    const { chapterTitle, chapterNumber, chapterDescription, chapterImage } = data
    const coverUrl = chapterImage && getStrapiMedia(chapterImage.url)

    return (
        <>
            <div id={`chapter__${chapterNumber}`} className="bg-indigo-500 text-center overflow-hidden relative dark:bg-slate-700">
                <div className="header-box container xl:px-0 xl:max-w-[850px] mx-auto  1xl:max-w-screen-lg flex flex-col items-center justify-around h-full">
                    <div className="entry__meta border-b border-white/20 flex flex-col items-center justify-evenly  py-8 pb-2 xl:space-y-5 xl:py-16 xl:pb-6 w-full">
                        <p className="text-center text-base xl:text-lg font-bold text-white">Chapter {chapterNumber}</p>
                        <h2 className="text-xl/snug xl:text-4xl/snug text-center font-bold text-white">{chapterTitle}
                        </h2>
                    </div>
                    <article className={cn(
                        "entry__description grid xl:grid-cols-2 text-left space-x-4 py-10 xl:py-12 text-white font-light",
                        inter.className
                    )}>
                        <div className="description text-xl/[1.8] xl:text-2xl/[1.8]" dangerouslySetInnerHTML={{ __html: sanitizer(chapterDescription) }}></div>
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