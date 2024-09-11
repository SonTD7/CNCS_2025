import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";

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

interface Props {
    position: number,
    item: Posts
}

// handle reapeater post or page to get value
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

export default function Listposts(Props: Props) {

    const { position, item } = Props

    const post = handleSingular(item) 
    const linkHref = post ? post.slug : "/"
    const imgUrl = post && getStrapiMedia(post.cover.url)

    return (

        <Link href={linkHref} className={cn(
            position == 1 ? "flex flex-col justify-between items-stretch  space-y-4 dark:text-white" : "flex justify-start items-center space-x-4 dark:text-white"
        )} >
            <Image
                src={imgUrl ? imgUrl : ""}
                width={position == 1 ? 540 : 160}
                height={position == 1 ? 281 : 83}
                alt="Các bước làm website"
                className={cn(
                    position == 1 ? "rounded " : "rounded max-h-[73px] xl:max-h-[83px] xl:min-h-[83px] xl:min-w-[160px]"
                )}
            />
            <div className={cn(
                position == 1 ? "des flex flex-col space-y-4" : "des "
            )}>
                <h3 className={cn(
                    position == 1 ? "title text-2xl xl:text-3xl font-bold" : "title text-base xl:text-lg font-bold"
                )}>{post && post.title}</h3>
                <p className={cn(
                    position == 1 ? "summary text-gray-500 dark:text-gray-300" : "summary text-gray-3000 dark:text-gray-50 hidden"
                )}>
                    Từng bước làm theo sẽ có thể có 1 website, chỉ cần làm theo từng bước sẽ thành công
                </p>

            </div>
        </Link>


    );
}