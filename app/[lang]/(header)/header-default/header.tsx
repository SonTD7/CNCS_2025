"use client"
import { useState, useRef, memo } from "react";
import { Fahkwang } from 'next/font/google'
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import _ from "lodash"
import Link from "next/link";
import { UseMediaQuery } from "@/hooks/use-media-query";
import { Navigation } from "./navigation";
import MobileNavigate from "./mobile-navigate";
import { cn } from "@/lib/utils";

const fahkwang = Fahkwang({
    subsets: ['vietnamese'],
    weight: ['200', '300', '400', '500', '600', '700']
})

function Header() {
    const isDesktop = UseMediaQuery("(min-width: 1024px)");
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();
    const lastYRef = useRef(0);

    useMotionValueEvent(scrollY, "change", (y) => {
        const difference = y - lastYRef.current;
        if (Math.abs(difference) > 50) {
            setIsHidden(difference > 0);
            lastYRef.current = y;
        }
    });

    return (
        <motion.div
            animate={isHidden ? "hidden" : "visible"}
            whileHover="visible"
            onFocusCapture={() => setIsHidden(false)}
            variants={{
                hidden: {
                    y: "-90px",
                },
                visible: {
                    y: "0%",
                },
            }}
            transition={{ duration: 0.1 }}
            className="header-main w-full bg-white dark:bg-black flex justify-between lg:justify-start items-center transition-all top-0 fixed max-h-20 z-30 bg-popover text-popover-foreground"
        >
            <header className="header-main w-full bg-white dark:bg-black flex justify-between lg:justify-start items-center transition-all top-0 fixed max-h-20 z-30 bg-popover text-popover-foreground">
                <div className="w-full flex space-x-11 justify-between 1lg:justify-start container items-center relative h-20">
                    <Link title="Logo" href="/" className="flex space-x-5 justify-center items-center">
                        <span className={cn(
                            "font-bold capitalize text-xl xl:text-2xl text-indigo-700 dark:text-white flex 1-tracking-widest",
                            fahkwang.className
                        )}>
                            <span className="text-5xl font-bold">Lotus </span><span className=" xl:text-lg xl:opacity-40">dev</span> <span className="1-ml-9 self-end 1text-5xl font-bold  xl:text-4xl">A </span>
                        </span>
                    </Link>
                    {isDesktop ? <Navigation /> : <MobileNavigate />}
                </div>
            </header>
        </motion.div>
    );
}

export default memo(Header);