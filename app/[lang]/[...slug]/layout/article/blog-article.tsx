import Header from "./header"
import Content from "./content"

interface Cover {
    id: number
    url: string
}
interface Props {
    id: number
    title: string
    description: string
    slug: string
    cover: Cover
}

export default function Blogarticle({
    children,
    data
}: {
    children: React.ReactNode,
    data: Props
}) {
    return (
        <article className="relative">
            <Header data={data} />
            <Content children={children} />
        </article>
    );
}