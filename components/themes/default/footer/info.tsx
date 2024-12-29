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
					<span className="font-bold capitalize text-xl xl:text-2xl text-sprimary-400 dark:text-white flex 1-tracking-widest">
						<span className="text-5xl font-bold">Logo </span>
						<span className=" xl:text-lg xl:opacity-40">
							dev
						</span>
						<span className="1-ml-9 self-end 1text-5xl font-bold  xl:text-4xl">

						</span>
					</span>
				</Link>
				<p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
					Trusted in more than 100 countries & 5 million customers.
					Follow us on social media.
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
