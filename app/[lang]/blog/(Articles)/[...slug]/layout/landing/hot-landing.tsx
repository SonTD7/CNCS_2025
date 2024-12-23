import Header from "./header"
import Content from "./content"
import LandingToc from "./landing-toc"

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
    description: string
    slug: string
    cover: Cover
    headerCover: Cover
    contentSections: ContentSections[]
}

export default function Hotlanding({
    children,
    data
}: {
    children: React.ReactNode,
    data: Props
}) {
    return (
        <article className="relative">
            <Header data={data} />
            <LandingToc data={data} />
            <Content children={children} />
        </article>
    );
}