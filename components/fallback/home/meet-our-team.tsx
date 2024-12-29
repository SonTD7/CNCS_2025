export default function MeetOurTeam() {
    return (
        <section id="team" className="py-16 xl:py-32 scontainer">
            <div className="1container 1mx-auto 1px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">
                    Meet Our Team
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                        <img
                            src="https://huongnghiepsongan.com/wp-content/uploads/2023/07/mimi-thian-lp1AKIUV3yo-unsplash-scaled-e1690873172379.jpg"
                            alt="Team Member 1"
                            className="w-full rounded-full mb-4"
                        />
                        <h3 className="text-base xl:text-xl font-semibold mb-2">John Doe</h3>
                        <p className="text-gray-700 text-sm xl:text-base">Role: Software Engineer</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                        <img
                            src="https://huongnghiepsongan.com/wp-content/uploads/2023/07/mimi-thian-lp1AKIUV3yo-unsplash-scaled-e1690873172379.jpg"
                            alt="Team Member 2"
                            className="w-full rounded-full mb-4"
                        />
                        <h3 className="text-base xl:text-xl font-semibold mb-2">Jane Smith</h3>
                        <p className="text-gray-700 text-sm xl:text-base">Role: Graphic Designer</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                        <img
                            src="https://huongnghiepsongan.com/wp-content/uploads/2023/07/mimi-thian-lp1AKIUV3yo-unsplash-scaled-e1690873172379.jpg"
                            alt="Team Member 3"
                            className="w-full rounded-full mb-4"
                        />
                        <h3 className="text-base xl:text-xl font-semibold mb-2">Alex Johnson</h3>
                        <p className="text-gray-700 text-sm xl:text-base">Role: Marketing Manager</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                        <img
                            src="https://huongnghiepsongan.com/wp-content/uploads/2023/07/mimi-thian-lp1AKIUV3yo-unsplash-scaled-e1690873172379.jpg"
                            alt="Team Member 4"
                            className="w-full rounded-full mb-4"
                        />
                        <h3 className="text-base xl:text-xl font-semibold mb-2">Peter Johnson</h3>
                        <p className="text-gray-700 text-sm xl:text-base">Role: Seo specialist</p>
                    </div>
                </div>
            </div>
        </section>

    );
}