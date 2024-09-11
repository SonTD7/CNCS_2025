import Wavesvg from "../../(home)/(images)/wave-svg";
import CircleFreeTools from "../../(home)/(images)/CircleFreeTools"
import { CboxRoute } from "../../../../components/combox/cbox-route"

interface Route {
    title: string
}

export default function RouteBox({ data }: { data: Route }) {
    const { title } = data
    console.log(title)
    return (
        <section>
            <div className="h-full  py-5 xl:py-10">
                <div className="wave-svg flex justify-center items-center">
                    <Wavesvg className="dark:fill-slate-200 stroke-[#4338ca] dark:stroke-slate-300"/>
                </div>
                <div className="freetools-forms relative h-full dark:before:bg-slate-700 before:bg-slate-100 before:h-1/2 before:w-full before:block before:absolute before:bottom-0 ">
                    <div className="w-full mx-auto relative h-full flex items-center justify-center my-8">
                        <CircleFreeTools
                            className="absolute top-0 max-h-52 max-w-72 xl:max-h-[575px] xl:w-[575px] xl:h-[575px] fill-none stroke-slate-200 dark:stroke-slate-700"
                        />
                    </div>
                    <div className="container flex justify-center items-center">
                        <div className="free-forms h-full relative flex flex-col items-center justify-around space-y-16 border dark:border-slate-400 bg-white dark:bg-slate-600 p-4 xl:p-28 rounded-md xl:rounded-lg my-10 xl:my-20 py-10 xl:py-16 overflow-hidden xl:max-w-[760px]">
                            <div className="header-forms flex h-full relative flex-col justify-between items-center space-y-5 xl:space-y-10 text-center">
                                <h3 className="text-primary font-bold text-lg">Miễn phí Công cụ</h3>
                                <h2 className="text-3xl   xl:text-4xl font-bold text-indigo-700 dark:text-white">Có ngay website chỉ 5 phút</h2>
                                <p className="text-lg dark:text-white">Tạo trang thương hiệu online chỉ trong 3 bước</p>
                            </div>
                            <CboxRoute
                                title="Công cụ"
                                type="noeb"
                                frameworks={[
                                    {
                                        url: "plugins",
                                        title: "Mua Plugins",
                                    },
                                    {
                                        url: "https://maivietson.com",
                                        title: "Blog Website",
                                    },
                                    {
                                        url: "wordpress",
                                        title: "Nghịch wordpress",
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}