import Link from "next/link";
import Image from "next/image";
interface props {
    cover: string
}
export default function SimpleSliderItem({ cover }: {cover : props} ) {
    return (
        <>
            <Link href={"/"} className="w-full relative">
                <Image
                    src={cover}
                    alt=""
                    width={2200}
                    height={800}
                    className="h-screen w-auto image__slider"
                />
            </Link>
            <div className="left__blur bg-white/30 backdrop-blur-[5px] w-1/2 h-full max-h-[800px] flex justify-center items-center absolute top-0 left-0">
                <div className="banner__textbox flex flex-col space-y-10 text-white items-center max-w-xl">
                    <h3 className="font-bold text-4xl/snug ">
                        AWING, nền tảng tạo sự khác biệt cho Wi-Fi marketing
                    </h3>
                    <p>
                        Repudiandae iure recusandae sunt veritatis nemo optio
                        reprehenderit, tempora distinctio quibusdam fugiat
                        architecto eos molestias? Minima dicta explicabo
                        expedita commodi ducimus vitae.
                    </p>
                    <Link href={"/"} className="self-start"> View More </Link>
                </div>
            </div>
        </>
    );
}
