import { LAYOUT_CONFIG } from "@/lib/constants/config";
import React from "react";
import dynamic from "next/dynamic";
const Layout = dynamic<{
    children: React.ReactNode
    params: {
        lang: string,
        slug: string
    }
}>(() => import(`@/components/themes/${LAYOUT_CONFIG}/articles/controller`))
export default async function SlugLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: {
        lang: string,
        slug: string
    }
}) {
    return <Layout params={params}>{children}</Layout>
}