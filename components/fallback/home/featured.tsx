export default function Featured({ data }: any) {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            />
            <section id="featured" className="py-20 my-24">
                <div className="scontainer 1container mx-auto 1px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 xl:mb-24">Features</h2>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 xl:gap-8">

                        <div className="group relative cursor-pointer overflow-hidden bg-white px-3 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sprimary transition-all duration-300 group-hover:scale-[10]" />
                            <div className="relative z-10 mx-auto max-w-md">
                                <span className="grid h-20 w-20 place-items-center rounded-full bg-sprimary transition-all duration-300 group-hover:bg-sprimary-400">
                                    <i className="fas fa-chart-line fa-2x text-white 1mb-4" />
                                </span>
                                <div className="space-y-6 pt-5 text-sm xl:text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                    <p className="line-clamp-4 xl:line-clamp-5">
                                        Perfect for learning how the framework works, prototyping a new idea,
                                        or creating a demo to share online.
                                    </p>
                                </div>
                                <div className="pt-5 text-base font-semibold leading-7">
                                    <p>
                                        <a
                                            href="#"
                                            className="text-sprimary transition-all duration-300 group-hover:text-white"
                                        >
                                            Read the docs →
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative cursor-pointer overflow-hidden bg-white px-3 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sprimary transition-all duration-300 group-hover:scale-[10]" />
                            <div className="relative z-10 mx-auto max-w-md">
                                <span className="grid h-20 w-20 place-items-center rounded-full bg-sprimary transition-all duration-300 group-hover:bg-sprimary-400 place-">
                                    <i className="fas fa-users fa-2x text-white 1mb-4" />

                                </span>
                                <div className="space-y-6 pt-5 text-sm xl:text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                    <p className="line-clamp-4 xl:line-clamp-5" >
                                        Perfect for learning how the framework works, prototyping a new idea,
                                        or creating a demo to share online.
                                    </p>
                                </div>
                                <div className="pt-5 text-base font-semibold leading-7">
                                    <p>
                                        <a
                                            href="#"
                                            className="text-sprimary transition-all duration-300 group-hover:text-white"
                                        >
                                            Read the docs →
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative cursor-pointer overflow-hidden bg-white px-3 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sprimary transition-all duration-300 group-hover:scale-[10]" />
                            <div className="relative z-10 mx-auto max-w-md">
                                <span className="grid h-20 w-20 place-items-center rounded-full bg-sprimary transition-all duration-300 group-hover:bg-sprimary-400 place-">
                                    <i className="fas fa-chart-line fa-2x text-white 1mb-4" />

                                </span>
                                <div className="space-y-6 pt-5 text-sm xl:text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                    <p className="line-clamp-4 xl:line-clamp-5">
                                        Perfect for learning how the framework works, prototyping a new idea,
                                        or creating a demo to share online.
                                    </p>
                                </div>
                                <div className="pt-5 text-base font-semibold leading-7">
                                    <p>
                                        <a
                                            href="#"
                                            className="text-sprimary transition-all duration-300 group-hover:text-white"
                                        >
                                            Read the docs →
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>



                        <div className="group relative cursor-pointer overflow-hidden bg-white px-3 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sprimary transition-all duration-300 group-hover:scale-[10]" />
                            <div className="relative z-10 mx-auto max-w-md">
                                <span className="grid h-20 w-20 place-items-center rounded-full bg-sprimary transition-all duration-300 group-hover:bg-sprimary-400 place-">
                                    <i className="fas fa-chart-line fa-2x text-white 1mb-4" />

                                </span>
                                <div className="space-y-6 pt-5 text-sm xl:text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                    <p className="line-clamp-4 xl:line-clamp-5">
                                        Perfect for learning how the framework works, prototyping a new idea,
                                        or creating a demo to share online.
                                    </p>
                                </div>
                                <div className="pt-5 text-base font-semibold leading-7">
                                    <p>
                                        <a
                                            href="#"
                                            className="text-sprimary transition-all duration-300 group-hover:text-white"
                                        >
                                            Read the docs →
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>

    );
}