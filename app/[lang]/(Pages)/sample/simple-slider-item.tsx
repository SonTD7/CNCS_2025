import Link from "next/link"
import Image from "next/image"
interface props {
	cover: string
	title: string
	description: string
}
export default function SimpleSliderItem({ data }: { data: props }) {
	const { title, cover, description } = data
	return (
		<>
			<div className="relative overflow-hidden xl:min-h-[80%] mx-auto">
				<Link
					href={"/"}
					className="w-full relative h-full overflow-hidden"
				>
					<Image
						src={cover}
						alt=""
						width={2200}
						height={800}
						className="xl:min-h-[800px] w-auto image__slider object-cover"
					/>
				</Link>
				<div className="left__blur bg-white/30 backdrop-blur-[5px] w-1/2 min-h-full max-h-[800px] flex justify-center items-center absolute top-0 left-0 animate__animated animate__fadeInLeft delay-100">
					<div className="banner__textbox flex flex-col space-y-10 text-white items-center max-w-xl">
						<h3 className="font-bold text-5xl/snug animate__animated animate__fadeInRight delay-1000">
							{title}
						</h3>
						<p className="animate__animated animate__fadeInRight animate__delay-2s">
							{description}
						</p>
						<Link
							href={"/"}
							className="self-start animate__animated animate__fadeInRight animate__delay-3s"
						>
							View More
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
