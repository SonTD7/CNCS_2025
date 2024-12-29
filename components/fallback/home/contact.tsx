export default function Contact() {
    return (
        <section id="contact" className="text-gray-700  relative">
            <div className="absolute inset-0 bg-gray-300">
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    title="map"
                    scrolling="no"
                    // src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245374.5338204738!2d107.91381644233356!3d16.0666785594263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b86727e06!2zxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1735458814996!5m2!1svi!2s"
                    style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                />
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                        Feedback
                    </h2>
                    <p className="leading-relaxed mb-5 text-gray-600">
                        Post-ironic portland shabby chic echo park, banjo fashion axe
                    </p>
                    <input
                        className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                        placeholder="Email"
                        type="email"
                    />
                    <textarea
                        className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
                        placeholder="Message"
                        defaultValue={""}
                    />
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Button
                    </button>
                    <p className="text-xs text-gray-500 mt-3">
                        Chicharrones blog helvetica normcore iceland tousled brook viral
                        artisan.
                    </p>
                </div>
            </div>
        </section>

    );
}