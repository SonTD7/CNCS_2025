import { Badge } from "@/components/ui/badge";
import { ComboboxRoute } from "@/components/combox/combobox-route";
import WorkingSvg from "../../(images)/working-svg";

export default function Banner() {
    return (
        <>
            <section className="home-page text-justify h-[calc(100vh-5rem)] bg-gradient-to-t from-sbglight to-white relative flex items-center" id="homepage">
                {/* <Grad
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-0"
				/> */}
                <div className="container flex justify-center items-center space-y-11 flex-col py-10 z-20 relative">
                    <h1 className="  font-bold text-center xl:max-w-4xl">
                        <span className="font-normal 1italic text-xl xl:text-3xl">Tại hạ có:</span> <br /> <span className="text-primary text-lg xl:text-3xl/snug">300 chuyện sinh tồn trong giới <p className="text-indigo-700 text-4xl xl:text-6xl/snug">freelancer</p> </span>
                    </h1>
                    <blockquote className="note-content flex flex-col xl:flex-row space-x-5 xl:w-[550px] p-4 relative bg-white border border-gray-400 rounded-lg justify-center w-full">

                        <div className="content-nnn text-sm xl:text-base/[1.6rem] relative text-center flex flex-col xl:flex-row justify-between items-center space-y-2  xl:space-y-0 xl:space-x-4">
                            <div> <Badge variant="notice" className="text-white">Gợi ý </Badge> muốn kể bạn nghe:</div>
                            <ComboboxRoute />
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
        </>
    );
}