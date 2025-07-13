"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils/utils";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoading = () => setIsLoading(false);

        if (document.readyState === "complete") {
            setIsLoading(false);
        } else {
            window.addEventListener("load", handleLoading);
            return () => window.removeEventListener("load", handleLoading);
        }
    }, []);

    return (
        <div
            className={cn(
                "w-screen h-screen fixed top-0 left-0 z-50 bg-[#f0fefe] flex items-center justify-center transition-opacity duration-500",
                !isLoading && "hidden"
            )}
        >
            <div className="relative flex flex-col items-center">
                {/* Logo Image */}
                <img
                    src="/logo.png" // Đường dẫn logo của bạn
                    alt="Logo"
                    className="w-80 animate-float"
                />

                {/* Spinner raindrop */}
                {/* <div className="absolute top-1/2 animate-spin">
                    <div className="w-6 h-6 border-4 border-t-[#66c8cc] border-[#b2e6e8] rounded-full"></div>
                </div> */}

                <p className="mt-8 text-lg font-semibold tracking-wide relative overflow-hidden
  bg-gradient-to-r from-[#66c8cc] via-[#66c8cc] to-transparent
  bg-[200%_auto] bg-clip-text text-transparent animate-fade-slide">
                    Loading...
                </p>
            </div>
        </div>
    );
}
