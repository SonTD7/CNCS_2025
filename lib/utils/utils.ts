import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
