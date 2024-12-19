"use client"

import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import "animate.css"

import {
	Autoplay,
	Navigation,
	Pagination,
	Scrollbar,
	EffectFade,
} from "swiper/modules"
import SimpleSliderItem from "./simple-slider-item"

const dataSample = {
	cover1: {
		title: "AWING, nền tảng tạo sự khác biệt cho Wi-Fi marketing 1",
		cover: "https://www.sktelecom.com/images/main/index-skt40th-bg_lg.jpg",
		description:
			"Nền tảng điện toán đám mây ACM (Adaptive Campaign Management) do AWING phát triển có thể biến đổi bất kỳ một hệ thống Wi-Fi sẵn có thành Wi-Fi marketing",
	},
	cover2: {
		title: "AWING, nền tảng tạo sự khác biệt cho Wi-Fi marketing 2",
		cover: "https://www.sktelecom.com/images/main/index-visual-202311_lg.jpg",
		description:
			"Nền tảng điện toán đám mây ACM (Adaptive Campaign Management) do AWING phát triển có thể biến đổi bất kỳ một hệ thống Wi-Fi sẵn có thành Wi-Fi marketing",
	},
}

export default function SimpleSlider() {
	const progressCircle: any = useRef(null)
	const progressContent: any = useRef(null)
	const onAutoplayTimeLeft = (s: any , time: number, progress: number) => {
		progressCircle.current.style.setProperty("--progress", 1 - progress)
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
	}

	return (
		<Swiper
			spaceBetween={0}
			slidesPerView={1}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
			effect={"fade"}
			modules={[Autoplay, EffectFade, Navigation, Pagination]}
			autoplay={{
				delay: 7500,
				disableOnInteraction: false,
			}}
			loop={true}
			className="mySwiper"
			onAutoplayTimeLeft={onAutoplayTimeLeft}
		>
			<SwiperSlide>
				<SimpleSliderItem data={dataSample.cover1} />
			</SwiperSlide>
			<SwiperSlide>
				<SimpleSliderItem data={dataSample.cover2} />
			</SwiperSlide>
			<div
				className="autoplay-progress absolute w-12 h-12 bottom-4 right-4 z-10 flex items-center justify-center "
				slot="container-end"
			>
				<svg
					viewBox="0 0 48 48"
					ref={progressCircle}
					className="absolute left-0 top-0 h-full w-full stroke-1 stroke-white fill-none -rotate-90"
				>
					<circle cx="24" cy="24" r="20"></circle>
				</svg>
				<span className="text-white" ref={progressContent}></span>
			</div>
		</Swiper>
	)
}
