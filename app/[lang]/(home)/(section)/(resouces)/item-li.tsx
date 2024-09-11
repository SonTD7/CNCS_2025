import ListStyleSvg from "../../(images)/list-style-svg";
import Link from "next/link";
type WorkingType = typeof ListStyleSvg

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

interface props {
    item: Posts
    color: string
}
function handleSingular(item: Posts) {
    let docu
    if (item && item.isPage) {
        docu = item.page
    }
    if (item && !item.isPage) {
        docu = item.article
    }
    return docu
}
export default function ItemLi(props: props) {
    const { item, color } = props
    const post = handleSingular(item)
    const linkHref = post ? post.slug : "/"

    return (
        <li className="relative pb-1">
            <ListStyleSvg fill={color} height={16} className="h-4 top-2 absolute w-5 left-0 dark:!bg-white dark:rounded-full dark:!w-4 " />
            <Link href={linkHref} className="pl-6 inline-block xl:text-lg/[2rem]">
                {post && post.title}
            </Link>
        </li>
    );
}