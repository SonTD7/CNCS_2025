import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function renderButtonStyle(type: string) {
    switch (type) {
        case "primary":
            return "px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900";
        case "secondary":
            return "px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100";
        default:
            return "px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900";
    }
}

export function validUrl(urlString: string) {
    const urlPattern = new RegExp(
        "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
        "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
}

export function capitalizeFirstLetter(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export function slugToComponentName(slug: string, route: string, data?: any) {
    const parts = slug.split("-");
    let componentName: string = "";
    parts.forEach((s) => {
        componentName += capitalizeFirstLetter(s);
    });
    const FLayout = dynamic<{data?: any}>(
        () => import(`@/components/${route}/${componentName}`),
        {
            loading: () => <section className="h-screen w-screen flex justify-center items-center">
                <button type="button" className="bg-transparent-500 " disabled>
                    <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24">
                    </svg>
                    Processing...
                </button>
            </section>
            ,
            ssr: false
        }
    );
    return FLayout
}
