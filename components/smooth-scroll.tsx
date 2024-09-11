"use client";
import Scrollbar from "smooth-scrollbar";
import { useEffect, useState } from "react";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";


import { UseMediaQuery } from "@/hooks/use-media-query";
import { Navigate } from "@/app/[lang]/(header)/navigate";
import MobileNavigate from "@/app/[lang]/(header)/mobile-navigate";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { Fahkwang } from 'next/font/google'

import gsap from "gsap"

import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";


import _ from "lodash";

const fahkwang = Fahkwang({
    subsets: ['vietnamese'],
    weight: ['200', '300', '400', '500', '600', '700']
})


const Scroll = () => {
    const isDesktop = UseMediaQuery("(min-width: 768px)");
    const overscrollOptions = {
        enable: true,
        effect: "bounce",
        damping: 0.15,
        maxOverscroll: 150,
        glowColor: "#222a2d",
        thumbMinSize: "3"
    };
    const options = {
        damping: 0.15,
        // delegateTo: document, 
        alwaysShowTracks: true,
        plugins: {
            overscroll: {
                ...overscrollOptions,
            },
        },
    };
    const [direction, setDirection] = useState("up");
    const updateDebounce = _.debounce((val) => {
        setDirection(val);
    }, 10);

    useEffect(() => {

        // gsap.registerPlugin(ScrollTrigger);
        // Scrollbar.use(OverscrollPlugin);

        // const mainEle = document.getElementById("main")!;
        // const bodyScrollBar = Scrollbar.init(mainEle, options)!;
        // const scrollbar = Scrollbar.get(mainEle);
        // let oldDirection = 0;
        // let oldRenderID = 0;
        // ScrollTrigger.scrollerProxy(".header-main", {
        //     scrollTop(value) {
        //         if (arguments.length) {
        //             scrollbar.scrollTop = value;
        //         }
        //         return scrollbar.scrollTop;
        //     }
        // });
        // scrollbar.addListener(ScrollTrigger.update);
        // ScrollTrigger.defaults({ scroller: document.querySelector(".header-main") });
        // ScrollTrigger.defaults({ scroller: ".smooth-scroll" });

        // const showAnim = gsap.from('.header-main', {
        //     yPercent: -100,
        //     paused: true,
        //     duration: 0.2
        // }).progress(1);

        // ScrollTrigger.create({
        //     start: "top top",
        //     end: 99999,
        //     onUpdate: (self) => {
        //         self.direction === -1 ? showAnim.play() : showAnim.reverse()
        //     }
        // });



        // scrollbar.addListener(({ offset }) => {
        //     const { _renderID } = scrollbar.track._scrollbar;
        //     const { y } = scrollbar.track._scrollbar.offset;

        //     if (oldDirection > y) {
        //         updateDebounce("up");
        //     } else {
        //         updateDebounce("down");
        //     }
        //     oldDirection = y;
        //     oldRenderID = _renderID;
        // });

        return () => {
            // if (Scrollbar) Scrollbar.destroy(mainEle);
            // bodyScrollBar.removeListener(ScrollTrigger.update);

        };
    }, []);

    let oldDirection = 0;
    let oldRenderID = 0;
    useGSAP(() => {

        gsap.registerPlugin(ScrollTrigger);
        Scrollbar.use(OverscrollPlugin);

        const header = document.querySelector(".header-main");
        const mainEle = document.getElementById("main")!;
        const bodyScrollBar = Scrollbar.init(mainEle, options)!;
        const scrollbar = Scrollbar.get(mainEle);
        ScrollTrigger.scrollerProxy(".header-main", {
            scrollTop(value) {
                // console.log(value);

                // if (arguments.length) {
                // bodyScrollBar.scrollTop = value;
                // }
                // return bodyScrollBar!.scrollTop;
                return bodyScrollBar!.scrollTop;
            }
        });
        bodyScrollBar.addListener(ScrollTrigger.update);
        ScrollTrigger.defaults({ scroller: document.querySelector(".header-main") });
        // ScrollTrigger.defaults({ scroller: ".smooth-scroll" });

        const showAnim = gsap.from('.header-main', {
            yPercent: -100,
            paused: true,
            duration: 0.2,

        }).progress(1);

        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onEnter: () => {
                header?.classList.add("shadow-md");
            },
            onLeaveBack: () => {
                header?.classList.remove("shadow-md");
            },
            onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse()
            }
        });


        // scrollbar.addListener(({ offset }) => {
        //     const { _renderID } = scrollbar.track._scrollbar;
        //     const { y } = scrollbar.track._scrollbar.offset;

        //     if (oldDirection > y) {
        //         updateDebounce("up");
        //     } else {
        //         updateDebounce("down");
        //     }
        //     oldDirection = y;
        //     oldRenderID = _renderID;
        // });



        return () => {
            if (Scrollbar) Scrollbar.destroy(mainEle);
            // bodyScrollBar.removeListener(ScrollTrigger.update);

        };
    });


    return (


        <header className={cn(
            " header-main w-full bg-white flex justify-between lg:justify-start items-center duration-750 transition-all top-0 fixed max-h-20 z-10",
            // direction == "up" ? `fixed h-20 max-h-20 ${direction}` : `max-h-0 overflow-hidden ${direction}`,
            // !direction ? "shadow-md" : ""
        )}>
            <div className={cn(
                "w-full flex space-x-11 justify-between lg:justify-start container items-center relative  duration-750 transition-all h-20",
                // direction == "up" ? "min-h-20 h-20" : "max-h-0 h-20"
            )}>
                <a href="/" className="flex space-x-5 justify-center items-center">
                    <Image src="https://maivietson.com/images/logo-mvs.png" width={44} height={44} alt="logo" />
                    {/* <Image src="/hero.png" width={44} height={44} alt="logo" /> */}
                    <span className={cn(
                        "font-bold uppercase  text-base text-gray-700",
                        fahkwang.className
                    )}>Mai Việt Sơn</span>
                </a>
                {isDesktop ? <Navigate /> : <MobileNavigate />}
            </div>
        </header>

    );
};

export default Scroll;
