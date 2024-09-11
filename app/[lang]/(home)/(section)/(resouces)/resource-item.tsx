import { cn } from "@/lib/utils";
import Link from "next/link";
import ItemLi from "./item-li";

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
    title: string
    subHeading: string
    description: string
    bgColor: string
    img: string
    colorFill: string
    colorText: string
    colorBase: string,
    listpost: Posts[]

}


export default function ResouceItem(data: Props) {
    const { title, bgColor, img, colorFill, colorText, colorBase, subHeading, description, listpost } = data
    return (

        <div className="item-resources grid grid-cols-1 xl:grid-cols-3 rounded-lg bg-white dark:bg-slate-600">
            <div className={cn(
                "item--head  1h-full text-white rounded-t-lg xl:rounded-lg p-6 py-5 relative bg-no-repeat bg-[length:210px_auto] bg-center ",
                bgColor ? bgColor : "bg-indigo-400",
            )}
                style={{ 
                    backgroundImage: img ? `url(${img})` : "",
                    backgroundColor: colorBase ?? colorBase
                }}
            >
                <Link href={"/docs"}
                    className="min-h-64 h-full flex flex-col justify-stretch" >

                    <span className="text-xl xl:text-2xl font-light">{title ? title : "Non Title"}</span>

                </Link>
            </div>

            <div className="desc-item p-10 px-4 xl:py-8 xl:px-10 hidden xl:flex xl:space-y-8 xl:flex-col tracking-wide dark:bg-slate-600">
                <h3 className={cn(
                    "text-sm font-bold uppercase dark:!text-white"
                )}
                    style={{ color: colorBase ?? colorBase }}
                >{subHeading}</h3>
                <p className="text-gray-600 tracking-wide xl:text-lg/[2rem] dark:!text-white">{description}</p>
            </div>
            <div className="list-res p-10 px-4 xl:py-8 xl:px-10 xl:tracking-wide flex space-y-4 xl:space-y-8 flex-col dark:bg-slate-600">
                <h3 className={cn(
                    "text-sm uppercase font-bold dark:!text-white",
                    colorText ?? colorText
                )}
                    style={{ color: colorBase ?? colorBase }}
                >Tài nguyên nổi bật:</h3>
                <ul className="list--item text-[#424348] dark:text-white flex flex-col space-y-1 xl:space-y-2 justify-center">
                    {
                        listpost.map((post, index) => {

                            return (
                                <ItemLi
                                    item={post}
                                    color={colorFill}
                                    key={index}

                                />
                            )
                        })
                    }

                </ul>
            </div>
        </div>

    );
}