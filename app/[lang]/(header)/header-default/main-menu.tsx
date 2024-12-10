"use client"
import { useState, useEffect } from "react"
import { getMenu } from "@/app/[lang]/utils/get-menu"
import menuResolverRouter from "../../utils/menu-resolver-router"
interface Layout {
    title: string
    url: string
    summary: string
}
export default function Mainmenu() {
    const [menuList, setMenuList] = useState([])

    useEffect(() => {
        async function fetchMenu() {
            let res = await getMenu('main-menu', 'vi')
            if (res.data.length !== 0) {
                setMenuList(res.data[0].items)
            }
        }
        fetchMenu()
    }, [])

    return menuList && menuList.map((layout: Layout[], index: number) => {
        menuResolverRouter(layout, index, "menu")
    })

}