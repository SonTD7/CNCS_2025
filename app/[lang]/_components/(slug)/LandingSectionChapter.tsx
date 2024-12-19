"use client"
import ChapterHeader from "../../(Articles)/[...slug]/layout/landing/chapter-header";
import ChapterContents from "../../(Articles)/[...slug]/layout/landing/chapter-contents";

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
interface ArticleComp {
    h2: string
    bgColor: string
    content: string
    source: string
}
interface ChapterContent {
    id: number
    article: ArticleComp[]
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

export default function LandingSectionChapter({ data }: { data: any }) {

    return (
        <>
            <ChapterHeader data={data} />
            <ChapterContents data={data} />
        </>
    );
}