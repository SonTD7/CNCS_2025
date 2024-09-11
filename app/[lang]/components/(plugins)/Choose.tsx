
import { Badge } from "@/components/ui/badge";
import PluginsCard from "./../../plugins/plugin-card";
import { CboxRoute } from "@/components/combox/cbox-route";

interface Links {
    id: number
    title: string
    url: string
}

interface Plugins {
    title: string,
    listlink: Links[],
    type: string
}


export default function Plugins({ data }: { data: Plugins }) {
    const { title, listlink, type } = data
    return (
        <>
            <section className="choose flex justify-center items-center bg-sbglight relative">
                <div className="container py-20">
                    <div className="flex justify-center items-center">
                        <blockquote className="note-content flex flex-col xl:flex-row space-x-5 xl:w-[550px] p-4 relative bg-white border border-gray-400 rounded-lg justify-center w-full">
                            <div className="content-nnn text-sm xl:text-base/[1.6rem] relative text-center flex flex-col xl:flex-row justify-between items-center space-y-4  xl:space-y-0 xl:space-x-8">
                                <div> <Badge variant="notice" className="text-white">Gợi ý </Badge> {title}:   </div>
                                <CboxRoute
                                    title={title}
                                    type={type ?? type}
                                    frameworks={listlink} />
                            </div>
                        </blockquote>
                    </div>
                </div>

            </section>

            <section className="category flex justify-center items-center overflow-hidden">
                <div className="container py-20 flex flex-col justify-between items-center  xl:grid xl:grid-cols-3 ">
                    <PluginsCard />
                    <PluginsCard />
                    <PluginsCard />
                    <PluginsCard />
                    <PluginsCard />
                    <PluginsCard />
                </div>

            </section>
        </>
    );
}
