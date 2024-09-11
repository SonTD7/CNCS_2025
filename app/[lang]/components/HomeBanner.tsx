import { Badge } from "@/components/ui/badge";
import { CboxRoute } from "@/components/combox/cbox-route";
import WorkingSvg from "@/app/[lang]/(home)/(images)/working-svg";
import { Fahkwang } from 'next/font/google'
import { cn } from "@/lib/utils";

const fahkwang = Fahkwang({
    subsets: ['vietnamese'],
    weight: ['200', '300', '400', '500', '600', '700'],
    variable: '--font-fahkwang'
})


interface Links {
    id: number
    title: string
    url: string
}

interface Home {
    subheading1: string,
    subheading2: string,
    title: string,
    listlink: Links[]
}
export default function HomeBanner({ data }: { data: Home }) {
    const { title, listlink, subheading1, subheading2 } = data

    return (
        <section className="home-page text-justify h-[calc(100vh-5rem)] bg-gradient-to-t from-sbglight to-white relative flex items-center" id="homepage">
            <div className={cn(
                "container flex justify-center items-center space-y-11 flex-col py-10 z-20 relative",
                fahkwang.className
            )}>
                <h1 className="  font-bold text-center xl:max-w-4xl">
                    <span className="font-normal 1italic text-xl xl:text-3xl">{subheading1}:</span> <br /> <span className={cn(
                        "text-primary text-lg xl:text-3xl/snug",
                        fahkwang.className
                    )}>{subheading2} <p className="text-indigo-700 text-4xl xl:text-6xl/snug">{title}</p> </span>
                </h1>
                <blockquote className="note-content flex flex-col xl:flex-row space-x-5 xl:w-[550px] p-4 relative bg-white border border-gray-400 rounded-lg justify-center w-full">

                    <div className="content-nnn text-sm xl:text-base/[1.6rem] relative text-center flex flex-col xl:flex-row justify-between items-center space-y-2  xl:space-y-0 xl:space-x-4">
                        <div> <Badge variant="notice" className="text-white">Gợi ý </Badge> muốn kể bạn nghe:</div>
                        <CboxRoute
                            title="Chuyện muốn kể"
                            type="outline"
                            frameworks={listlink}
                        />
                    </div>
                </blockquote>

                <div className="why-home h-full relative">
                    <WorkingSvg
                        className="1h-56 h-36 xl:h-64   "
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </section>
    );
}