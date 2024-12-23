"use client"
import { useState, useRef, memo } from "react"
import { Fahkwang } from "next/font/google"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import _ from "lodash"
import Link from "next/link"
import { UseMediaQuery } from "@/hooks/use-media-query"
import { Navigation } from "./navigation"
import MobileNavigate from "./mobile-navigate"
import { cn } from "@/lib/utils"

const fahkwang = Fahkwang({
	subsets: ["vietnamese"],
	weight: ["200", "300", "400", "500", "600", "700"],
})

function Header() {
	const isDesktop = UseMediaQuery("(min-width: 1024px)")
	const [isHidden, setIsHidden] = useState(false)
	const [bg, setBg] = useState("bg-transparent")
	const { scrollY } = useScroll()
	const lastYRef = useRef(0)

	useMotionValueEvent(scrollY, "change", (y) => {
		const difference = y - lastYRef.current
		if (Math.abs(difference) > 50) {
			setIsHidden(difference > 0)
			lastYRef.current = y
		}
		if (Math.abs(y) > 50) {
			setBg("!bg-white dark:!bg-black")
		} else {
            setBg("bg-transparent")
        }
	})

	return (
		<motion.div
			animate={isHidden ? "hidden" : "visible"}
			whileHover="visible"
			onFocusCapture={() => setIsHidden(false)}
			variants={{
				hidden: {
					// y: "-90px",
					y: "0",
					backgroundColor: "white",
				},
				visible: {
					y: "0%",
					backgroundColor: "transparent",
				},
			}}
			transition={{ duration: 0.1 }}
			className={cn(
                "header-main w-full  flex justify-between lg:justify-start items-center transition-all top-0 fixed max-h-24 z-30",
                bg
            )}
		>
			<header className={cn(
                "header-main w-full flex justify-between lg:justify-start items-center transition-all top-0 fixed max-h-24 z-30 border-b border-slate-200 border-opacity-25",
                bg
            )}>
				<div className="w-full flex space-x-11 justify-between 1lg:justify-start container items-center relative h-24">
					<Link
						title="Logo"
						href="/"
						className="flex space-x-5 items-center"
					>
						<span
							className={cn(
								"font-bold capitalize text-xl xl:text-2xl text-indigo-700 dark:text-white flex 1-tracking-widest",
								fahkwang.className
							)}
						>
							<span className="text-5xl font-bold">Lotus </span>
							<span className=" xl:text-lg xl:opacity-40">
								dev
							</span>{" "}
							<span className="1-ml-9 self-end 1text-5xl font-bold  xl:text-4xl">
								A{" "}
							</span>
						</span>
					</Link>
					{isDesktop ? <Navigation /> : <MobileNavigate />}
				</div>
			</header>
		</motion.div>
	)
}

export default memo(Header)
