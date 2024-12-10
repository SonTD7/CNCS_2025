// "use client"
import "@/globals.css";
import Footer from "@/app/[lang]/(footer)/footer";
import Loader from "@/app/[lang]/(header)/loader";
import Header from "@/app/[lang]/(header)/header";
import AnimatedCursor from "react-animated-cursor"
import { Fahkwang } from 'next/font/google'
import { cn } from "@/lib/utils";
import { fetchAPI } from "@/app/[lang]/utils/fetch-api"
import { i18n } from "@/i18n-config";
import AutoScrollTop from "../utils/auto-scroll-top";

const fahkwang = Fahkwang({
    subsets: ['vietnamese'],
    weight: ['200', '300', '400', '500', '600', '700'],
    display: 'swap',
    fallback: ['system-ui', 'arial'],
    variable: '--font-fahkwang'
})

async function getGlobal(lang: string): Promise<any> {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    if (!token) throw new Error("The Strapi API Token environment variable is not set.");
    const path = `/global`;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const urlParamsObject = {
        populate: [
            // "metadata.shareImage",
            // "favicon",
            // "notificationBanner.link",
            // "navbar.links",
            // "navbar.navbarLogo.logoImg",
            // "footer.footerLogo.logoImg",
            // "footer.menuLinks",
            // "footer.legalLinks",
            // "footer.socialLinks",
            // "footer.categories",
        ],
        locale: lang,
    };
    return await fetchAPI(path, urlParamsObject, options);
}

export default function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: { lang: string };
}>) {
    return (
        <html lang={params.lang} suppressHydrationWarning >
            <body
                className={`antialiased dark:bg-slate-600 bg-popover text-popover-foreground`}
            >
                <AnimatedCursor
                    innerSize={0}
                    outerSize={12}
                    color='0, 0, 0'
                    showSystemCursor={true}
                    outerAlpha={0.34}
                    innerScale={0.7}
                    outerScale={5}
                    clickables={[
                        'a',
                        'img',
                        'svg',
                        'h2',
                        'h1',
                        'h3',
                        'input[type="text"]',
                        'input[type="email"]',
                        'input[type="number"]',
                        'input[type="submit"]',
                        'input[type="image"]',
                        'label[for]',
                        'select',
                        'textarea',
                        'button',
                        '.link'
                    ]}
                />
                <main className={cn(
                    fahkwang.className,
                    "pt-20 main-ele dark:bg-slate-600 bg-popover text-popover-foreground"
                )}
                    id="main"
                >
                    <Loader />
                    <Header />
                    {children}
                    <Footer />
                    <AutoScrollTop />
                </main>
            </body>
        </html>
    );
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}