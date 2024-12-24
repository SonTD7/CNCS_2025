"use client"
import { cn } from "@/lib/utils";
import { League_Spartan } from "next/font/google";
import FbIcon from "../../(images)/fb-icon";
import TwitterIcon from "../../(images)/twitter-icon";
import TableOfContents from "../../table-of-contents";
import { TOCContext, useTOCContextValues } from "../../../../../_utils/TOCContextType";
import { useState } from "react";

const inter = League_Spartan({
    subsets: ['vietnamese'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    display: 'swap',
    fallback: ['system-ui', 'arial'],
    variable: '--font-fahkwang'
})

export default function Content({
    children
}: {
    children: React.ReactNode
}) {
    const { values } = useTOCContextValues()
    const [showT, setShowT] = useState(false)
    return (
        <TOCContext.Provider value={values}>
            <div className="content relative overflow-visible dark:bg-slate-600">
                <div className="container xl:px-[8.55rem] dark:bg-slate-600">
                    <div className="content-side flex flex-col xl:flex-row  gap-6 justify-center relative dark:bg-slate-600">
                        <TableOfContents show={showT} />
                        <article className="md:w-[700px] md:min-w-[700px] dark:bg-slate-600">
                            <div className={cn(
                                "content-entry text-[22px]/[1.8] font-light dark:text-white dark:bg-slate-600",
                                inter.className
                            )}>
                                {children}
                            </div>
                        </article>
                        <span className="hidden xl:block w-full">
                            <div className="content-share sticky top-32">
                                <ul className="cont flex flex-col space-y-4 p-4 border max-w-20 justify-center items-center dark:bg-slate-900 dark:text-slate-300">
                                    <li className="ic flex flex-col space-y-0 items-center justify-center">
                                        <p className="border-b">3888 </p>
                                        <p>Shares</p>
                                    </li>
                                    <li className="ic">
                                        <a href="#"> <TwitterIcon className="w-8 h-8 dark:fill-white" /></a>
                                    </li>
                                    <li className="ic">
                                        <a href="#"> <FbIcon className="w-8 h-8 fill-blue-600 dark:fill-white" /></a>
                                    </li>
                                </ul>
                            </div>
                        </span>
                    </div>
                    <div className="action-onthispage fixed xl:hidden bottom-0  left-0 w-full z-30  bg-slate-200 bg-opacity-80 dark:bg-slate-600 dark:!text-white">
                        <div className="onthis  flex justify-center items-center">
                            <button className="p-4 py-2 w-full " onClick={() => {
                                setShowT(!showT)
                            }}>
                                Tóm tắt
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </TOCContext.Provider>
    );
}