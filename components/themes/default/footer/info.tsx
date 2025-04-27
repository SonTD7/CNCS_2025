import Link from "next/link"
import { Instagram, Linkedin, Twitter, Youtube } from "./logo-helpers"

export default function Info() {
	return (
		<>
			<div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
				<Link
					title="Logo"
					href="/"
					className="flex space-x-5 justify-start items-center"
				>

					<img
						src="/logo.png"
						alt="Logo"
						className="object-cover object-center w-16 h-4 sm:w-20 sm:h-8 md:w-24 md:h-12 lg:w-32 lg:h-20"
					/>


				</Link>
				<p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
					<strong>Chăm Người Chăm Sóc (CNCS)</strong> – chăm lo cho những người tận tâm chăm sóc. Chúng tôi mang đến dịch vụ sức khỏe toàn diện, dễ tiếp cận, vì người chăm sóc cũng xứng đáng được quan tâm.
				</p>
				<div className="flex mt-4 space-x-4 justify-center lg:justify-start sm:mt-0 ">
					<a
						href="#"
						className="w-9 h-9 rounded-full bg-indigo-600 flex justify-center items-center hover:bg-indigo-600"
					>
						<Twitter className="w-5 h-5 text-white" />
					</a>
					<a
						href="#"
						className="w-9 h-9 rounded-full bg-indigo-600 flex justify-center items-center hover:bg-indigo-600"
					>
						<Instagram className="w-5 h-5 text-white" />
					</a>
					<a
						href="#"
						className="w-9 h-9 rounded-full bg-indigo-600 flex justify-center items-center hover:bg-indigo-600"
					>
						<Linkedin className="w-5 h-5 text-white" />
					</a>
					<a
						href="#"
						className="w-9 h-9 rounded-full bg-indigo-600 flex justify-center items-center hover:bg-indigo-600 relative"
					>
						<Youtube className="w-[1.25rem] h-[0.875rem] text-white" />
					</a>
				</div>
			</div>
		</>
	)
}
