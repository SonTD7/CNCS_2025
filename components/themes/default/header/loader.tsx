"use client";
import "./loading.css"
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils/utils";


export default function Loader({locale, dicts}: {locale: any, dicts: any}) {

    const [isLoading, setIsLoading] = useState(true);
    const handleLoading = () => {
        setIsLoading(false);
    };
    useEffect(() => {
        if (document.readyState === "complete") {
            setIsLoading(false);
        } else {
            window.addEventListener("load", handleLoading);
            return () => document.removeEventListener("load", handleLoading);
        }
    }, []);

    return (
        <div
            className={cn(
                "w-screen h-screen fixed top-0 left-0 z-50 1bg-background bg-white dark:bg-black justify-center items-center flex",
                !isLoading ? "hidden" : "flex"
            )}
        >
            <div className="loader_content">
                <h1 className="loader_title">
                    Lotus*A
                    <div className="aurora">
                        <div className="aurora__item"></div>
                        <div className="aurora__item"></div>
                        <div className="aurora__item"></div>
                        <div className="aurora__item"></div>
                    </div>
                </h1>
                <p className="subtitle">{dicts && dicts.global.loader.description}.</p>
            </div>
        </div>
    );
}
