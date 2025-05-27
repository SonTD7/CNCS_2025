"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);

    // Gửi dữ liệu lên API trung gian để tránh lỗi CORS từ Google Sheets
    const sendToGoogleSheet = async (formData: any) => {
        try {
            const response = await fetch("/api/insertToSheet", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Không gửi được dữ liệu lên Google Sheets.");
            console.log("✅ Gửi lên Google Sheets thành công.");
        } catch (error) {
            console.error("❌ Lỗi gửi Google Sheets:", error);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) {
            console.error("Không tìm thấy form.");
            return;
        }

        const formElement = formRef.current;
        const formData = {
            name: (formElement.elements.namedItem("name") as HTMLInputElement)?.value || "",
            email: (formElement.elements.namedItem("email") as HTMLInputElement)?.value || "",
            phone: (formElement.elements.namedItem("phone") as HTMLInputElement)?.value || "",
            industry: (formElement.elements.namedItem("industry") as HTMLSelectElement)?.value || "",
            message: (formElement.elements.namedItem("message") as HTMLTextAreaElement)?.value || "",
        };

        try {
            const result = await emailjs.sendForm(
                "service_orzq1se",
                "template_12w63qw",
                formElement,
                "9UIq72dwP6ga-Xvjj"
            );
            console.log("📧 Email sent:", result.text);

            await sendToGoogleSheet(formData);

            alert("✅ Thông tin đã được gửi thành công!");
            formElement.reset();
        } catch (error: any) {
            console.error("❌ Lỗi gửi:", error);
            alert("Gửi thất bại: " + (error.text || error.message));
        }
    };

    return (
        <section id="contact" className="text-gray-700 relative">
            {/* Google Map */}
            <div className="absolute inset-0 bg-gray-300">
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    title="map"
                    scrolling="no"
                    src="https://www.google.com/maps/embed?...your_link..."
                    style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                />
            </div>

            {/* Form Container */}
            <div className="container mx-auto px-5 py-24 flex justify-end">
                <div className="w-full lg:w-1/3 md:w-1/2 bg-white rounded-lg shadow-lg p-8 relative z-10">
                    <h2 className="text-2xl font-semibold text-center text-gray-900 mb-4">
                        Gửi thông tin tới CNCS
                    </h2>
                    <p className="text-center text-gray-600 mb-6">
                        Hãy cho chúng tôi biết thêm về bạn và những điều bạn muốn chia sẻ.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                        <input
                            name="name"
                            placeholder="Họ và tên"
                            className="w-full border border-gray-300 p-3 rounded"
                            required
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Gmail"
                            className="w-full border border-gray-300 p-3 rounded"
                            required
                        />
                        <input
                            name="phone"
                            placeholder="Số điện thoại"
                            className="w-full border border-gray-300 p-3 rounded"
                        />
                        <select
                            name="industry"
                            className="w-full border border-gray-300 p-3 rounded"
                            required
                        >
                            <option value="">Bạn đang hoạt động trong lĩnh vực...</option>
                            <option value="Giáo dục">Giáo dục</option>
                            <option value="Y tế">Y tế</option>
                            <option value="CNTT">Công nghệ thông tin</option>
                            <option value="Ngành khác">Ngành khác</option>
                        </select>
                        <textarea
                            name="message"
                            placeholder="Bạn cần gửi gắm điều gì tới CNCS..."
                            className="w-full border border-gray-300 p-3 rounded"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 px-6 rounded text-lg hover:bg-indigo-700 transition-colors"
                        >
                            Gửi thông tin
                        </button>
                    </form>

                    <p className="text-xs text-gray-500 mt-4 text-center">
                        Cảm ơn bạn đã dành thời gian chia sẻ với chúng tôi.
                    </p>
                </div>
            </div>
        </section>
    );
}