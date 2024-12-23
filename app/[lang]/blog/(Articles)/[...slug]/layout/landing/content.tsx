"use client"
import { cn } from "@/lib/utils";
import { League_Spartan } from "next/font/google";
import FbIcon from "../../(images)/fb-icon";
import TwitterIcon from "../../(images)/twitter-icon";

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
    return (
        <div data-scroll className="content relative overflow-visible">
            <div className="w-full">
                <div className="content-side flex flex-col xl:flex-row gap-6 justify-center relative">
                    <article className="w-full">
                        <div className={cn(
                            "content-entry-landing text-xl/[1.8] xl:text-[22px]/[1.8] font-light",
                            inter.className
                        )}>
                            {children}
                        </div>
                    </article>
                    <span className="hidden xl:block xl:fixed xl:max-w-20 xl:z-30 xl:top-32 xl:left-20 xl:bg-white dark:bg-slate-900 dark:text-slate-300">
                        <div className="content-share sticky top-32">
                            <ul className="cont flex flex-col space-y-4 p-4 border max-w-20 justify-center items-center">
                                <li className="ic flex flex-col space-y-0 items-center justify-center">
                                    <p className="border-b">3888</p>
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
            </div>
        </div>
    );
}