export default function Page() {
    return (
        <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-dark">
            <div className="container">
                <div className="flex flex-row lg:flex-row lg:items-center max-lg:gap-4 justify-between w-full">
                    <ul className="flex 1flex-col overflow-auto sm:flex-row sm:items-center gap-4 sm:gap-12">
                        <li className="flex items-center cursor-pointer outline-none group">
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-600"
                                    d="M19.7778 9.33333V9.33333C19.7778 8.09337 19.7778 7.47339 19.6415 6.96472C19.2716 5.58436 18.1934 4.50616 16.8131 4.1363C16.3044 4 15.6844 4 14.4444 4C12.963 4 11.4815 4 10 4C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12V12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20C11.3333 20 12.6667 20 14 20C15.6554 20 16.4831 20 17.1459 19.7588C18.2569 19.3544 19.1322 18.4791 19.5365 17.3681C19.7778 16.7053 19.7778 15.8776 19.7778 14.2222V14.2222M16.6667 14.2222H20.2222C21.2041 14.2222 22 13.4263 22 12.4444V11.1111C22 10.1293 21.2041 9.33333 20.2222 9.33333H16.6667C15.6848 9.33333 14.8889 10.1293 14.8889 11.1111V12.4444C14.8889 13.4263 15.6848 14.2222 16.6667 14.2222Z"
                                    stroke="#4F46E5"
                                    strokeWidth="1.5"
                                />
                            </svg>
                            <span className="font-normal text-lg leading-8 text-indigo-600 ml-2 mr-3 transition-all duration-500 group-hover:text-indigo-600">
                                Finance
                            </span>
                            <button className="flex aspect-square h-6 rounded-full border border-indigo-600  items-center justify-center font-manrope font-medium text-base text-indigo-600  transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
                                8
                            </button>
                        </li>
                        <li className="flex items-center cursor-pointer outline-none group">
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className="stroke-black transition-all duration-500 group-hover:stroke-indigo-600"
                                    d="M10 14.2449C9.55209 14.2449 7.76925 14.2449 6 14.2449C4.11438 14.2449 3.17157 14.2449 2.58579 13.6591C2 13.0733 2 12.1305 2 10.2449V10.0816C2 8.19601 2 7.25321 2.58579 6.66742C3.17157 6.08163 4.11275 6.08163 5.99512 6.08163C9.46482 6.08163 14.4728 6.08163 18 6.08163C19.8856 6.08163 20.8284 6.08163 21.4142 6.66742C22 7.25321 22 8.19599 22 10.0816C22 10.136 22 10.1905 22 10.245C22 12.1306 22 13.0733 21.4142 13.6591C20.8284 14.2449 19.8856 14.2449 18 14.2449C16.2308 14.2449 14.4479 14.2449 14 14.2449M20.6667 17.2381C20.6667 17.3697 20.6667 17.6444 20.6667 17.9986C20.6667 19.8851 20.6667 20.8284 20.0809 21.4142C19.4951 22 18.5523 22 16.6667 22H7.33333C5.44772 22 4.50491 22 3.91912 21.4142C3.33333 20.8284 3.33333 19.8856 3.33333 18V17.2381M15.3333 6.08163V5.33333C15.3333 4.08718 15.3333 3.4641 15.0654 3C14.8898 2.69596 14.6374 2.44349 14.3333 2.26795C13.8692 2 13.2462 2 12 2V2C10.7538 2 10.1308 2 9.66667 2.26795C9.36263 2.44349 9.11015 2.69596 8.93462 3C8.66667 3.4641 8.66667 4.08718 8.66667 5.33333V6.08163M11.3333 16.966H12.6667C13.403 16.966 14 16.3569 14 15.6054V12.8844C14 12.1329 13.403 11.5238 12.6667 11.5238H11.3333C10.597 11.5238 10 12.1329 10 12.8844V15.6054C10 16.3569 10.597 16.966 11.3333 16.966Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="font-normal text-lg leading-8 text-black pl-2 pr-3 transition-all duration-500 group-hover:text-indigo-600">
                                Management
                            </span>
                            <span className="w-6 h-6 rounded-full border border-gray-900 flex items-center justify-center font-manrope font-medium text-base text-gray-900 transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
                                3
                            </span>
                        </li>
                        <li className="flex items-center cursor-pointer outline-none group">
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className="stroke-black transition-all duration-500 group-hover:stroke-indigo-600"
                                    d="M9.69081 22H13.537M11.6139 2V3.53846M18.4123 4.8163L17.3244 5.90416M4.8155 4.81701L5.90336 5.90486M2 11.6154H3.53846M19.6893 11.6154H21.2278M7.53442 15.6948C5.2814 13.4418 5.2814 9.78895 7.53442 7.53592C9.78744 5.2829 13.4403 5.2829 15.6933 7.53592C17.9464 9.78895 17.9464 13.4418 15.6933 15.6948C15.1999 16.1883 14.6393 16.5737 14.041 16.851C13.745 16.9881 13.537 17.2743 13.537 17.6005L13.537 18.9231C13.537 19.3479 13.1926 19.6923 12.7677 19.6923H10.46C10.0352 19.6923 9.69081 19.3479 9.69081 18.9231V17.6005C9.6908 17.2743 9.48274 16.9881 9.18677 16.851C8.58845 16.5737 8.02786 16.1883 7.53442 15.6948Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span className="font-normal text-lg leading-8 text-black pl-2 pr-3 transition-all duration-500 group-hover:text-indigo-600 text-nowrap">
                                Today’s deal
                            </span>
                            <span className="w-6 h-6 rounded-full border border-gray-900 flex items-center justify-center font-manrope font-medium text-base text-gray-900 transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
                                1
                            </span>
                        </li>
                    </ul>
                    <div className="relative hidden lg:block w-full max-w-sm">
                        <svg
                            className="absolute top-1/2 -translate-y-1/2 left-4 z-10"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.5555 3.33203H3.44463C2.46273 3.33203 1.66675 4.12802 1.66675 5.10991C1.66675 5.56785 1.84345 6.00813 2.16004 6.33901L6.83697 11.2271C6.97021 11.3664 7.03684 11.436 7.0974 11.5068C7.57207 12.062 7.85127 12.7576 7.89207 13.4869C7.89728 13.5799 7.89728 13.6763 7.89728 13.869V16.251C7.89728 17.6854 9.30176 18.6988 10.663 18.2466C11.5227 17.961 12.1029 17.157 12.1029 16.251V14.2772C12.1029 13.6825 12.1029 13.3852 12.1523 13.1015C12.2323 12.6415 12.4081 12.2035 12.6683 11.8158C12.8287 11.5767 13.0342 11.3619 13.4454 10.9322L17.8401 6.33901C18.1567 6.00813 18.3334 5.56785 18.3334 5.10991C18.3334 4.12802 17.5374 3.33203 16.5555 3.33203Z"
                                stroke="black"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                        </svg>
                        <select
                            id="Offer"
                            className="h-12 border border-gray-300 text-gray-900 pl-11 text-base font-normal leading-7 rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 focus-within:bg-gray-50"
                        >
                            <option defaultValue="">Sort by time(high to low)</option>
                            <option value="option 1">option 1</option>
                            <option value="option 2">option 2</option>
                            <option value="option 3">option 3</option>
                            <option value="option 4">option 4</option>
                        </select>
                        <svg
                            className="absolute top-1/2 -translate-y-1/2 right-4 z-50"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                                stroke="#111827"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <svg
                    className="my-7 w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width={1216}
                    height={2}
                    viewBox="0 0 1216 2"
                    fill="none"
                >
                    <path d="M0 1H1216" stroke="#E5E7EB" />
                </svg>
            </div>

            <div className="container">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div
                            className="mb-10 wow fadeInUp group"
                            data-wow-delay=".1s"
                            style={{ visibility: "visible", animationDelay: "0.1s" }}
                        >
                            <div className="mb-8 overflow-hidden rounded-[5px]">
                                <a href="blog-details" className="block">
                                    <img
                                        src="https://play-tailwind.tailgrids.com/assets/images/blog/blog-01.jpg"
                                        alt="image"
                                        className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                                    />
                                </a>
                            </div>
                            <div>
                                <span className="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                                    Dec 22, 2023
                                </span>
                                <h3>
                                    <a
                                        href="blog-details"
                                        className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                    >
                                        Meet AutoManage, the best AI management tools
                                    </a>
                                </h3>
                                <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div
                            className="mb-10 wow fadeInUp group"
                            data-wow-delay=".15s"
                            style={{ visibility: "visible", animationDelay: "0.15s" }}
                        >
                            <div className="mb-8 overflow-hidden rounded-[5px]">
                                <a href="blog-details" className="block">
                                    <img
                                        src="https://play-tailwind.tailgrids.com/assets/images/blog/blog-02.jpg"
                                        alt="image"
                                        className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                                    />
                                </a>
                            </div>
                            <div>
                                <span className="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                                    Mar 15, 2023
                                </span>
                                <h3>
                                    <a
                                        href="blog-details"
                                        className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                    >
                                        How to earn more money as a wellness coach
                                    </a>
                                </h3>
                                <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div
                            className="mb-10 wow fadeInUp group"
                            data-wow-delay=".2s"
                            style={{ visibility: "visible", animationDelay: "0.2s" }}
                        >
                            <div className="mb-8 overflow-hidden rounded-[5px]">
                                <a href="blog-details" className="block">
                                    <img
                                        src="https://play-tailwind.tailgrids.com/assets/images/blog/blog-03.jpg"
                                        alt="image"
                                        className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                                    />
                                </a>
                            </div>
                            <div>
                                <span className="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                                    Jan 05, 2023
                                </span>
                                <h3>
                                    <a
                                        href="blog-details"
                                        className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                    >
                                        The no-fuss guide to upselling and cross selling
                                    </a>
                                </h3>
                                <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div
                            className="mb-10 wow fadeInUp group"
                            data-wow-delay=".1s"
                            style={{ visibility: "visible", animationDelay: "0.1s" }}
                        >
                            <div className="mb-8 overflow-hidden rounded-[5px]">
                                <a href="blog-details" className="block">
                                    <img
                                        src="https://play-tailwind.tailgrids.com/assets/images/blog/blog-02.jpg"
                                        alt="image"
                                        className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                                    />
                                </a>
                            </div>
                            <div>
                                <span className="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                                    Mar 15, 2023
                                </span>
                                <h3>
                                    <a
                                        href="blog-details"
                                        className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                    >
                                        How to earn more money as a wellness coach
                                    </a>
                                </h3>
                                <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div
                            className="mb-10 wow fadeInUp group"
                            data-wow-delay=".15s"
                            style={{ visibility: "visible", animationDelay: "0.15s" }}
                        >
                            <div className="mb-8 overflow-hidden rounded-[5px]">
                                <a href="blog-details" className="block">
                                    <img
                                        src="https://play-tailwind.tailgrids.com/assets/images/blog/blog-03.jpg"
                                        alt="image"
                                        className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                                    />
                                </a>
                            </div>
                            <div>
                                <span className="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                                    Jan 05, 2023
                                </span>
                                <h3>
                                    <a
                                        href="blog-details"
                                        className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                    >
                                        The no-fuss guide to upselling and cross selling
                                    </a>
                                </h3>
                                <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div
                            className="mb-10 wow fadeInUp group"
                            data-wow-delay=".2s"
                            style={{ visibility: "visible", animationDelay: "0.2s" }}
                        >
                            <div className="mb-8 overflow-hidden rounded-[5px]">
                                <a href="blog-details" className="block">
                                    <img
                                        src="https://play-tailwind.tailgrids.com/assets/images/blog/blog-01.jpg"
                                        alt="image"
                                        className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                                    />
                                </a>
                            </div>
                            <div>
                                <span className="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                                    Dec 22, 2023
                                </span>
                                <h3>
                                    <a
                                        href="blog-details"
                                        className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                    >
                                        Meet AutoManage, the best AI management tools
                                    </a>
                                </h3>
                                <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div
                            className="mb-10 wow fadeInUp group"
                            data-wow-delay=".1s"
                            style={{ visibility: "visible", animationDelay: "0.1s" }}
                        >
                            <div className="mb-8 overflow-hidden rounded-[5px]">
                                <a href="blog-details" className="block">
                                    <img
                                        src="https://play-tailwind.tailgrids.com/assets/images/blog/blog-01.jpg"
                                        alt="image"
                                        className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                                    />
                                </a>
                            </div>
                            <div>
                                <span className="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                                    Dec 22, 2023
                                </span>
                                <h3>
                                    <a
                                        href="blog-details"
                                        className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                    >
                                        Meet AutoManage, the best AI management tools
                                    </a>
                                </h3>
                                <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div
                            className="mb-10 wow fadeInUp group"
                            data-wow-delay=".15s"
                            style={{ visibility: "visible", animationDelay: "0.15s" }}
                        >
                            <div className="mb-8 overflow-hidden rounded-[5px]">
                                <a href="blog-details" className="block">
                                    <img
                                        src="https://play-tailwind.tailgrids.com/assets/images/blog/blog-02.jpg"
                                        alt="image"
                                        className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                                    />
                                </a>
                            </div>
                            <div>
                                <span className="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                                    Mar 15, 2023
                                </span>
                                <h3>
                                    <a
                                        href="blog-details"
                                        className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                    >
                                        How to earn more money as a wellness coach
                                    </a>
                                </h3>
                                <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div
                            className="mb-10 wow fadeInUp group"
                            data-wow-delay=".2s"
                            style={{ visibility: "visible", animationDelay: "0.2s" }}
                        >
                            <div className="mb-8 overflow-hidden rounded-[5px]">
                                <a href="blog-details" className="block">
                                    <img
                                        src="https://play-tailwind.tailgrids.com/assets/images/blog/blog-03.jpg"
                                        alt="image"
                                        className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                                    />
                                </a>
                            </div>
                            <div>
                                <span className="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                                    Jan 05, 2023
                                </span>
                                <h3>
                                    <a
                                        href="blog-details"
                                        className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                    >
                                        The no-fuss guide to upselling and cross selling
                                    </a>
                                </h3>
                                <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="mt-8 text-center wow fadeInUp"
                    data-wow-delay=".2s"
                    style={{ visibility: "visible", animationDelay: "0.2s" }}
                >
                    <div className="inline-flex p-3 bg-white dark:bg-dark-2 border rounded-[10px] border-stroke dark:border-dark-3">
                        <ul className="flex items-center -mx-1">
                            <li className="px-1">
                                <a
                                    href="#"
                                    className="flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white"
                                >
                                    <span>
                                        <svg
                                            width={8}
                                            height={15}
                                            viewBox="0 0 8 15"
                                            className="fill-current stroke-current"
                                        >
                                            <path
                                                d="M7.12979 1.91389L7.1299 1.914L7.1344 1.90875C7.31476 1.69833 7.31528 1.36878 7.1047 1.15819C7.01062 1.06412 6.86296 1.00488 6.73613 1.00488C6.57736 1.00488 6.4537 1.07206 6.34569 1.18007L6.34564 1.18001L6.34229 1.18358L0.830207 7.06752C0.830152 7.06757 0.830098 7.06763 0.830043 7.06769C0.402311 7.52078 0.406126 8.26524 0.827473 8.73615L0.827439 8.73618L0.829982 8.73889L6.34248 14.6014L6.34243 14.6014L6.34569 14.6047C6.546 14.805 6.88221 14.8491 7.1047 14.6266C7.30447 14.4268 7.34883 14.0918 7.12833 13.8693L1.62078 8.01209C1.55579 7.93114 1.56859 7.82519 1.61408 7.7797L1.61413 7.77975L1.61729 7.77639L7.12979 1.91389Z"
                                                strokeWidth="0.3"
                                            />
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li className="px-1">
                                <a
                                    href="#"
                                    className="flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white"
                                >
                                    1
                                </a>
                            </li>
                            <li className="px-1">
                                <a
                                    href="#"
                                    className="flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white"
                                >
                                    2
                                </a>
                            </li>
                            <li className="px-1">
                                <a
                                    href="#"
                                    className="flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white"
                                >
                                    3
                                </a>
                            </li>
                            <li className="px-1">
                                <a
                                    href="#"
                                    className="flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white"
                                >
                                    4
                                </a>
                            </li>
                            <li className="px-1">
                                <a
                                    href="#"
                                    className="flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white"
                                >
                                    <span>
                                        <svg
                                            width={8}
                                            height={15}
                                            viewBox="0 0 8 15"
                                            className="fill-current stroke-current"
                                        >
                                            <path
                                                d="M0.870212 13.0861L0.870097 13.086L0.865602 13.0912C0.685237 13.3017 0.684716 13.6312 0.895299 13.8418C0.989374 13.9359 1.13704 13.9951 1.26387 13.9951C1.42264 13.9951 1.5463 13.9279 1.65431 13.8199L1.65436 13.82L1.65771 13.8164L7.16979 7.93248C7.16985 7.93243 7.1699 7.93237 7.16996 7.93231C7.59769 7.47923 7.59387 6.73477 7.17253 6.26385L7.17256 6.26382L7.17002 6.26111L1.65752 0.398611L1.65757 0.398563L1.65431 0.395299C1.454 0.194997 1.11779 0.150934 0.895299 0.373424C0.695526 0.573197 0.651169 0.908167 0.871667 1.13067L6.37922 6.98791C6.4442 7.06886 6.43141 7.17481 6.38592 7.2203L6.38587 7.22025L6.38271 7.22361L0.870212 13.0861Z"
                                                strokeWidth="0.3"
                                            />
                                        </svg>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
}