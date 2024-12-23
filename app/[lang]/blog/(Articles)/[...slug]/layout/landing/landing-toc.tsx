"use client"
import Image from "next/image"
import { getStrapiMedia } from "../../../../../_utils/api-helpers"
import LocomotiveScroll from 'locomotive-scroll';
import { useCallback } from "react";
interface ChapterContent {
    id: number
    layoutSection: string
}

interface Cover {
    id: number
    name: string
    url: string
}

interface ContentSections {
    id: number
    chapterNumber: number
    chapterDescription: string
    chapterTitle: string
    chapterImage: Cover
    chapterContents: ChapterContent[]
    __component: string
}

interface Props {
    id: number
    title: string
    contentSections: ContentSections[]
}
export default function LandingToc({ data }: { data: Props }) {
    const { contentSections } = data
    // Filter contentSections only need sections.landing-section-chapter
    const contentSectionsFilter = contentSections.concat().filter((item) => item.__component == "sections.landing-section-chapter")
    const handleChapter = useCallback((chapterNumber: number) => {
        const scroll = new LocomotiveScroll();
        const targetE = document.querySelector(`#chapter__${chapterNumber}`) ?? window;
        targetE instanceof HTMLElement && scroll.scrollTo(targetE);
    }, [])
    return (
        <>
            <h3 className="text-center mx-auto text-3xl/snug xl:text-5xl/snug mt-10 xl:mt-16 dark:text-white">Chapter Contents</h3>
            <div className="xl:text-center mx-auto flex flex-wrap flex-col xl:flex-row justify-between items-center max-w-3xl py-10 xl:py-16">
                {
                    contentSectionsFilter && contentSectionsFilter.map(({ chapterTitle, chapterImage, chapterNumber }, index) => {
                        const coverUrl = chapterImage && getStrapiMedia(chapterImage.url)

                        return (
                            <a onClick={() => handleChapter(chapterNumber)} className="flex flex-row items-center justify-start space-x-5 px-10 xl:px-0 xl:space-x-0 xl:grid xl:grid-flow-row xl:grid-rows-2 xl:justify-between xl:items-center w-full xl:w-fit cursor-pointer group/chapter transition-all duration-400 dark:text-white" key={index}>
                                <figure className="basis-1/3 xl:basis-0 ">
                                    <Image
                                        src={coverUrl ? coverUrl : ""}
                                        width="235"
                                        height="235"
                                        alt={chapterTitle}
                                        className="rounded-full min-h-24 max-h-24 xl:max-h-[235p] xl:min-h-[235px] p-2 xl:p-6 group-hover/chapter:scale-[1.2] duration-400 transition-transform ease-linear  object-fill"
                                    />
                                </figure>
                                <h6 className="text-base font-light w-full xl:max-w-56 xl:self-start basis-3/4 xl:basis-0 mx-0">
                                    <span className="font-bold">{chapterNumber}</span>
                                    <span className="">. </span> 
                                    {chapterTitle}</h6>
                            </a>
                        )
                    }
                    )
                }
            </div>
        </>
    );
}