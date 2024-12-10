import { lazy } from "react";
import RootLayout from "./(layout)/layout-smooth";

const Lay = lazy(() => import("./(layout)/layout-default"));
const data:string = "default";
const LAYOUT_CONFIG = data ?? "smooth";
console.log("🚀 ~ LAYOUT_CONFIG:", LAYOUT_CONFIG)

export default function Layout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { lang: string };
}>) {
    return (
        <>
            {LAYOUT_CONFIG == "smooth" ? (
                <RootLayout params={params}> {children} </RootLayout>
            ) : (
                <Lay params={params}> {children} </Lay>
            )}
        </>
    );
}
