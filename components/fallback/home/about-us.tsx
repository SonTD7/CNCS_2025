export default function AboutUs() {
    return (
        <section className="bg-gray-50 py-16 pt-0" id="aboutus">
            <div className="scontainer 1px-8 my-24 mx-auto 1md:px-12 1lg:px-32 1max-w-screen-xl flex flex-col justify-center">
                <div className="flex flex-col ">
                    <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
                        <div>
                            {/* <h2 className="text-5xl/snug font-bold text__underline-center">Về Chúng tôi</h2> */}
                            <p className="text-balance mt-4 xl:mt-8">
                                Các hoạt động tại CNCS được thiết kế bởi chuyên gia, đảm bảo tính chuyên sâu và ý nghĩa.
                            </p>
                        </div>
                    </div>
                    {/* Starts component */}
                    <div className="mt-6 border-t pt-12">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center ">
                            <div>

                                <span className="text-gray-600  uppercase text-xs font-medium ">

                                    Because why not
                                </span>
                                <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">

                                    SELF - RETREAT CHĂM NGƯỜI CHĂM SÓC
                                </p>
                                <p className="text-sm  mt-4 text-gray-700 text-balance">

                                    Self-Retreat Chăm Người Chăm Sóc là hành trình nghỉ dưỡng ngắn ngày giúp những người làm nghề giúp đỡ có cơ hội tạm dừng – lắng nghe – phục hồi.
                                    Mỗi retreat được thiết kế theo một chủ đề riêng biệt, kết hợp giữa kiến thức về sức khỏe tinh thần, thực hành chăm sóc cơ thể và trải nghiệm kết nối với thiên nhiên.

                                </p>
                                <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                                    <div className="inline-flex items-center gap-2  text-xs text-gray-700">

                                        <svg
                                            className="icon icon-tabler text-gray-700 size-4 icon-tabler-360"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M17 15.328c2.414 -.718 4 -1.94 4 -3.328c0 -2.21 -4.03 -4 -9 -4s-9 1.79 -9 4s4.03 4 9 4" />
                                            <path d="M9 13l3 3l-3 3" />
                                        </svg>
                                        <span className="text-gray-950 font-medium text-sm">

                                            Clear data visibility
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-2  text-xs text-gray-700">

                                        <svg
                                            className="icon icon-tabler text-gray-700 size-4 icon-tabler-antenna-bars-3"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M6 18l0 -3" />
                                            <path d="M10 18l0 -6" />
                                            <path d="M14 18l0 .01" />
                                            <path d="M18 18l0 .01" />
                                        </svg>
                                        <span className="text-gray-950 font-medium text-sm">

                                            Reduced external factors
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-2  text-xs text-gray-700">

                                        <svg
                                            className="icon icon-tabler text-gray-700 size-4 icon-tabler-load-balancer"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                            <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                            <path d="M12 16v3" />
                                            <path d="M12 10v-7" />
                                            <path d="M9 6l3 -3l3 3" />
                                            <path d="M12 10v-7" />
                                            <path d="M9 6l3 -3l3 3" />
                                            <path d="M14.894 12.227l6.11 -2.224" />
                                            <path d="M17.159 8.21l3.845 1.793l-1.793 3.845" />
                                            <path d="M9.101 12.214l-6.075 -2.211" />
                                            <path d="M6.871 8.21l-3.845 1.793l1.793 3.845" />
                                        </svg>
                                        <span className="text-gray-950 font-medium text-sm">

                                            enhanced stabilty
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-2  text-xs text-gray-700">

                                        <svg
                                            className="icon icon-tabler text-gray-700 size-4 icon-tabler-brand-speedtest"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M5.636 19.364a9 9 0 1 1 12.728 0" />
                                            <path d="M16 9l-4 4" />
                                        </svg>
                                        <span className="text-gray-950 font-medium text-sm">

                                            accelerated times
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full md:order-first">

                                <img
                                    src="/cncswebside1.jpg"
                                    alt="#_"
                                    className=" bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center md:flex-row-reverse">
                            <div>

                                <span className="text-gray-600  uppercase text-xs font-medium ">

                                    Just because we can
                                </span>
                                <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">

                                    GIÁO DỤC CÙNG CNCS:
                                    CHĂM MÌNH TRƯỚC, CHĂM NGƯỜI SAU
                                </p>
                                <p className="text-sm  mt-4 text-gray-700 text-balance">

                                    Chuỗi hoạt động học tập ngắn, dễ tiếp cận giúp người làm nghề giúp đỡ xây nền vững vàng từ bên trong.
                                    Tập trung vào kỹ năng tự chăm sóc, quản lý cảm xúc và phòng ngừa kiệt sức – để bạn khỏe, rồi mới giúp người khác tốt hơn.
                                </p>
                                <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                                    <div className="inline-flex items-center gap-2  text-xs text-gray-700">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-database text-gray-700 size-4"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
                                            <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                                            <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                                        </svg>
                                        <span className="text-gray-950 font-medium text-sm">

                                            Transparent Data Access
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-2  text-xs text-gray-700">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-building text-gray-700 size-4"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M3 21l18 0" />
                                            <path d="M9 8l1 0" />
                                            <path d="M9 12l1 0" />
                                            <path d="M9 16l1 0" />
                                            <path d="M14 8l1 0" />
                                            <path d="M14 12l1 0" />
                                            <path d="M14 16l1 0" />
                                            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                                        </svg>
                                        <span className="text-gray-950 font-medium text-sm">

                                            Lowered Interference
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-2  text-xs text-gray-700">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-augmented-reality-2 text-gray-700 size-4"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M10 21h-2a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3.5" />
                                            <path d="M17 17l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5z" />
                                            <path d="M13 14.5v4.5l4 2.5" />
                                            <path d="M17 17l4 -2.5" />
                                            <path d="M11 4h2" />
                                        </svg>
                                        <span className="text-gray-950 font-medium text-sm">

                                            Improved Reliability
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-2  text-xs text-gray-700">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-time-duration-0 text-gray-700 size-4"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M3 12v.01" />
                                            <path d="M21 12v.01" />
                                            <path d="M12 21v.01" />
                                            <path d="M12 3v.01" />
                                            <path d="M7.5 4.2v.01" />
                                            <path d="M16.5 4.2v.01" />
                                            <path d="M16.5 19.8v.01" />
                                            <path d="M7.5 19.8v.01" />
                                            <path d="M4.2 16.5v.01" />
                                            <path d="M19.8 16.5v.01" />
                                            <path d="M19.8 7.5v.01" />
                                            <path d="M4.2 7.5v.01" />
                                            <path d="M10 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0z" />
                                        </svg>
                                        <span className="text-gray-950 font-medium text-sm">

                                            Faster Processing Times
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full ">

                                <img
                                    src="/cncswebside2.jpg"
                                    alt="#_"
                                    className=" bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Emds component */}

                </div>
            </div>
        </section>

    );
}