export default function Hero({ data }: any) {
    return (
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden -mt-20 pt-20" id="banner">
            <div className="absolute inset-0 ">
                 <img
                    src="https://huongnghiepsongan.com/wp-content/uploads/2023/05/Banner-Website-tac-dong-tich-cuc-1400x615.jpg"
                    alt="Background Image"
                    className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0 1bg-black opacity-90 bg-gradient-to-t from-sprimary-400 to-transparent" />
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h1 className="text-5xl font-bold leading-tight mb-4 max-w-3xl">
                    Gieo hy vọng, gặt đổi thay
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                Chương trình phi lợi nhuận tác động tích cực, hướng nghiệp cuộc sống
                </p>
                <a
                    href="#"
                    className="bg-sky-600 text-white hover:bg-sky-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                    Khám phá Ngay
                </a>
            </div>
        </div>

    );
}