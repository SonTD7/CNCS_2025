import ChapterArticle from "./chapter-article"
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

export default function ChapterContents({ data }: { data: props }) {
    const { chapterContents } = data
    return (
        <>
            {
                chapterContents.map(({ id, layoutSection, article }, index) => (
                    <ChapterArticle  data={article} key={index} />
                ))
            }
        </>
    );
}