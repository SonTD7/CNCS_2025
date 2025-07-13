export default function OurServices({ data }: any) {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            />
            <section id="services" className="py-8 bg-white sm:py-10 lg:py-16 scontainer">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
                            Dịch vụ
                        </h2>
                        <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
                            Dịch vụ tại CNCS được chuyên gia xây dựng với nội dung chuyên sâu và đầu tư kỹ lưỡng.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
                        {/* Feature 1 */}
                        <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
                            <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                                <i className="fa-solid fa-person-walking text-3xl text-gray-900" />
                            </div>
                            <h3 className="mt-12 text-xl font-bold text-gray-900">
                                HOẠT ĐỘNG

                            </h3>
                            <p className="mt-5 text-base text-gray-600">
                                Self-Retreat: Hành Trình Cá Nhân Hóa – Chủ Điểm Riêng
                            </p>
                            <p className="mt-5 text-base text-gray-600">
                                Trải Nghiệm Khác Biệt của CNCS là hành trình chăm sóc tinh thần toàn diện, giúp bạn khám phá bản thân, phục hồi năng lượng và kết nối sâu sắc với chính mình.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
                            <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                                <i className="fa-solid fa-book text-3xl text-gray-900" />
                            </div>
                            <h3 className="mt-12 text-xl font-bold text-gray-900">
                                GIÁO DỤC
                            </h3>
                            <p className="mt-5 text-base text-gray-600">
                                Học Để Chăm Mình, Vững Vàng Chăm Người

                            </p>
                            <p className="mt-5 text-base text-gray-600">

                                CNCS mang đến các hoạt động giáo dục giúp những người làm nghề giúp đỡ nâng cao kỹ năng chăm sóc bản thân và sức khỏe tinh thần.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
                            <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                                <i className="fa-solid fa-handshake text-3xl text-gray-900" />
                            </div>
                            <h3 className="mt-12 text-xl font-bold text-gray-900">
                                KẾT NỐI CỘNG ĐỒNG

                            </h3>
                            <p className="mt-5 text-base text-gray-600">
                                Kết Nối Cộng Đồng – Cùng Chăm Sóc, Cùng Vững Vàng
                            </p>
                            <p className="mt-5 text-base text-gray-600">
                                CNCS tin rằng sức mạnh tinh thần đến từ kết nối. Chúng tôi tạo không gian an toàn để những người giúp đỡ cùng chia sẻ, học hỏi và hỗ trợ nhau.
                            </p>
                        </div>
                        {/* Feature 4
                        <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
                            <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                                <i className="fa-solid fa-cloud text-3xl text-gray-900" />
                            </div>
                            <h3 className="mt-12 text-xl font-bold text-gray-900">
                                Cloud Integration
                            </h3>
                            <p className="mt-5 text-base text-gray-600">
                                Access your data from anywhere with seamless cloud integration. Work
                                without boundaries.
                            </p>
                        </div> */}
                        {/* Feature 5 */}
                        {/* <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
                            <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
                                <i className="fa-solid fa-pen-nib text-3xl text-gray-900" />
                            </div>
                            <h3 className="mt-12 text-xl font-bold text-gray-900">
                                Task Management
                            </h3>
                            <p className="mt-5 text-base text-gray-600">
                                Organize your workflow with efficient task management features. Stay
                                on top of your projects effortlessly.
                            </p>
                        </div> */}
                        {/* Feature 6 */}
                        {/* <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
                            <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
                                <i className="fa-solid fa-bolt text-3xl text-gray-900" />
                            </div>
                            <h3 className="mt-12 text-xl font-bold text-gray-900">
                                Performance Metrics
                            </h3>
                            <p className="mt-5 text-base text-gray-600">
                                Monitor and measure your performance with comprehensive metrics.
                                Optimize your processes for maximum efficiency.
                            </p>
                        </div> */}
                    </div>
                </div>
            </section>
        </>

    );
}