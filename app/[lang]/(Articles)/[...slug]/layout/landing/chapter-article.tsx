import { League_Spartan } from "next/font/google";
import { cn } from "@/lib/utils"
import DOMPurify from "isomorphic-dompurify";

const sanitizer = DOMPurify.sanitize;
const inter = League_Spartan({
    subsets: ['vietnamese'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    display: 'swap',
    fallback: ['system-ui', 'arial'],
    variable: '--font-fahkwang'
})

export default function ChapterArticle({ data }: { data: any }) {
    const { h2, content, bgColor } = data
    return (
        <>
            <div className="text-center overflow-hidden relative dark:!bg-slate-600 dark:text-white" style={{backgroundColor:bgColor}}>
                <div className="header-box 1container xl:max-w-[700px] mx-auto  1xl:max-w-screen-lg flex flex-col items-center justify-around h-full">
                    <div className="entry__meta border-b border-gray-500/20 flex flex-col items-center justify-evenly space-y-5 py-16 pb-6">
                        <h1 className="text-[2xl]/snug xl:text-4xl/snug text-center font-bold 1text-white">{h2}
                        </h1>
                    </div>
                    <article className={cn(
                        "entry__description grid xl:grid-cols-1 text-left space-x-4 py-10 xl:py-12  font-light",
                        inter.className
                    )}>
                        <div className="description text-xl/[1.8] xl:text-[22px]/[1.8] container xl:px-0" dangerouslySetInnerHTML={{ __html: sanitizer(content) }}></div>
                    </article>
                </div>
            </div>
        </>
    );
}