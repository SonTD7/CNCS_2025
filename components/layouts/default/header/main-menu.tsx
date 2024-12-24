"use client"
import { useState, useEffect } from "react"
import menuResolverRouter from "@/lib/menu-resolver-router"
import { getByTypeSlug } from "@/lib/get-by-type-slug"
interface Layout {
    title: string
    url: string
    summary: string
}
export default function Mainmenu() {
    const [menuList, setMenuList] = useState([])

    useEffect(() => {
        async function fetchMenu() {
            let res = await getByTypeSlug("/menus",'main-menu', 'vi', "*")
            if (res && res.data.length !== 0) {
                setMenuList(res.data[0].items)
            }
        }
        fetchMenu()
    }, [])

    return menuList && menuList.map((layout: Layout[], index: number) => {
        menuResolverRouter(layout, index, "menu")
    })

}