"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useContext, useEffect, useState } from "react";
import { TOCContext } from "../utils/TOCContextType";
import { cn } from "@/lib/utils";
import { UseMediaQuery } from "@/hooks/use-media-query";

interface props {
    show: boolean
}

export default function TableOfContents(props: props) {

    const isDesktop = UseMediaQuery("(min-width: 1025px)");
    const { show } = props
    const [showT, setShowT] = useState(true)
    const HIDDEN_OFFSET = 0.05

    useEffect(() => {
        setShowT(!showT)

    }, [show])
    const { sections, activeSection } = useContext(TOCContext)
    const { scrollYProgress } = useScroll();
    const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const [showTOC, setShowTOC] = useState(activeSection >= 0)

    scrollYProgress.on('change', (val) => {
        setShowTOC(activeSection >= 0 && val >= HIDDEN_OFFSET && val < 1 - HIDDEN_OFFSET)
    })

    return (
        <aside className={cn(
            "xl:block xl:min-w-52 relative w-full",
            showT ? "fixed bottom-0 top-0 h-screen bg-white dark:bg-slate-600 bg-opacity-95 z-20" : "hidden"
        )}>
            <motion.div
                className={cn(
                    "sticky top-32  flex space-x-4",
                    show ? "h-[calc(100vh-80px)]" : "h-[60vh]"
                )}
                initial={{ opacity: isDesktop ? 0 : 1, display: isDesktop ? 'none' : 'flex' }}
                animate={{
                    opacity: showTOC || !isDesktop ? 1 : 0,
                    display: showTOC || !isDesktop ? "flex" : "none"
                }}
            >
                <div className="h-full w-0.5  bg-neutral-100 dark:bg-slate-500 rounded-full overflow-hidden">
                    <motion.div className="bg-gradient-to-b from-neutral-100 to-indigo-700 w-full origin-top dark:from-slate-600 dark:to-white" style={{ height: progressHeight }} />
                </div>
                <div className="flex w-full items-center flex-col xl:block">
                    <p className="my-8 border-b dark:border-slate-500 uppercase dark:text-white">Tóm tắt</p>
                    <nav className="flex flex-col space-y-4 text-sm overflow-auto max-h-[calc(-160px+100svh)]">
                        {
                            sections.map(({ id, title }) => (
                                <span
                                    className={`text-black cursor-pointer transition-colors duration-200 ${activeSection === id ? "text-neutral-800 dark:text-white" : "text-neutral-300 dark:text-slate-500"} `}
                                    key={id}
                                    onClick={() => {
                                        document.getElementById(`section-${id}`)?.scrollIntoView({ behavior: "smooth" })

                                        if (!isDesktop) {
                                            setShowT(!showT)
                                        }
                                    }}
                                >
                                    {title}
                                </span>
                            ))
                        }
                    </nav>
                </div>
            </motion.div>
        </aside>
    );
}