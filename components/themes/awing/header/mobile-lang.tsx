"use client"
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"
import { Vie } from "../languages/vi";
import { Us } from "../languages/us";
import  {Jp}  from "../languages/ja";

import DarkMode from "../darkmode/dark-mode";

export default function MobileLang() {
    const router = useRouter();
    function handleLocaleChange(newLocale: string): void {

        if (typeof document !== "undefined") {
            document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
        }
        router.refresh();

    }
    if (!Cookies.get('NEXT_LOCALE')) {
        if (typeof document !== "undefined") {
            document.cookie = `NEXT_LOCALE=vi; path=/; max-age=31536000; SameSite=Lax`;
        };
    }

    return (
        <div className="flex justify-between space-x-1">
            <a className="mx-2 p-1 border rounded-full hover:ring-1 ring-red-500 hover:bg-gradient-to-tr hover:from-slate-300 hover:to-red-200" href="/" onClick={() => handleLocaleChange("vi")}>
                <Vie />
            </a>
            <a className="mx-2 p-1 border rounded-full hover:ring-1 ring-cyan-500 hover:bg-gradient-to-tr hover:from-slate-300 hover:to-cyan-200" href="/en" onClick={() => handleLocaleChange("en")}>
                <Us />
            </a>
            <a className="mx-2 p-1 border rounded-full hover:ring-1 ring-cyan-500 hover:bg-gradient-to-tr hover:from-slate-300 hover:to-cyan-200" href="/ja" onClick={() => handleLocaleChange("ja")}>
                <Jp />
            </a>
            <DarkMode />
        </div>
    );
}

