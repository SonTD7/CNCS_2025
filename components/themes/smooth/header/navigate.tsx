"use client"
import { useState, useEffect } from "react"
import Hot from "@/components/themes/default/menu/Hot"
import Grid from "@/components/themes/default/menu/Grid"
import Simple from "@/components/themes/default/menu/Simple"
import { NavigateFake } from "./navigate-fake"
import { getByTypeSlug } from "@/lib/api/get-by-type-slug"

export function Navigate() {
	const [menuList, setMenuList] = useState([])
	useEffect(() => {
		async function fetchMenu() {
			try {
				let res = await getByTypeSlug("/menus", "main-menu", "vi", "*")
				if (res && res.data.length !== 0) {
					setMenuList(res.data[0].items)
				}
			} catch (error) {
				console.log("🚀 ~ fetchMenu ~ error:", error)
			}
		}
		fetchMenu()
	}, [])
	return (
		<>
			{
				<NavigateFake />
			}
			{menuList && menuList.map((data, index) => {
				const { layout } = data
				return layout == "hot" ? (
					<Hot data={data} key={index} />
				) : layout == "grid" ? (
					<Grid data={data} key={index} />
				) : (
					<Simple data={data} key={index} />
				)
			})}
		</>
	)
}
