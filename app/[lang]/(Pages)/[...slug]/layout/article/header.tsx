import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { getStrapiMedia } from "../../../../_utils/api-helpers"

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
}

export default function Header({ data }: { data: props } ) {
    
    const { title, description, cover } = data
    const coverUrl = cover && getStrapiMedia(cover.url)
    
    return (
        <header className="dark:bg-slate-800">
            <div className="bg-indigo-500 text-center overflow-hidden relative dark:bg-slate-800 dark:text-white">
                <div className="header-box container xl:max-w-screen-lg flex flex-col items-center justify-around h-full dark:bg-slate-800">
                    <div className="flex flex-col items-center justify-evenly space-y-5 py-16">
                        <h1 className="text-2xl/snug xl:text-4xl/snug text-center font-bold text-white">{title}
                        </h1>
                        <div className="box-info flex flex-col space-y-10">
                            <time dateTime="2024-08-06T09:49:10" className="text-white text-center text-xs xl:text-sm">
                                Last updated
                                Aug. 06, 2024
                            </time>
                            <div className="box-author flex space-x-2 items-center">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage className="h-8 w-8" src="https://maivietson.com/images/logo.jpeg" />
                                    <AvatarFallback>S</AvatarFallback>
                                </Avatar>
                                <span className="text-white text-xs xl:text-sm">
                                    Viết bởi <span className="underline">Mai Việt Sơn</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <figure className="post-article dark:bg-slate-600 dark:before:bg-slate-600">
                        <picture>
                            <Image
                                className="rounded-md z-10 relative xl:max-w-[700px]"
                                src={coverUrl ? coverUrl : "" }
                                width="768"
                                height="402"
                                alt="title"
                            />
                        </picture>
                    </figure>
                </div>
            </div>
        </header>
    );
}