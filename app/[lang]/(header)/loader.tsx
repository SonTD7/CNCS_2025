"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);
    const handleLoading = () => {
        setIsLoading(false);
    }
    useEffect(() => {

        if (document.readyState === "complete") {
            setIsLoading(false);
        } else {
            window.addEventListener('load', handleLoading);
            return () => document.removeEventListener('load', handleLoading);
        }
    }, []);

    return (
        <div className={cn(
            "w-screen h-screen fixed top-0 left-0 z-50 1bg-background bg-white dark:bg-black justify-center items-center",
            !isLoading ? "hidden" : "flex"
        )}  >
            <Image
                src="https://cliply.co/wp-content/uploads/2019/06/371906220_TYPING_ON_LAPTOP_400px.gif"
                width={300}
                height={300}
                alt="loading"
                unoptimized
                priority
            />
        </div>
    );
}