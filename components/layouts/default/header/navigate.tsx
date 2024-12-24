"use client"
import { useState, useEffect } from "react"
import Hot from "@/components/layouts/default/menu/Hot"
import Grid from "@/components/layouts/default/menu/Grid"
import Simple from "@/components/layouts/default/menu/Simple"
import { NavigateFake } from "./navigate-fake"
import { getByTypeSlug } from "@/lib/get-by-type-slug"

export function Navigate() {
	const [menuList, setMenuList] = useState([])
	useEffect(() => {
		async function fetchMenu() {
			try {
				let res = await getByTypeSlug("/menus","main-menu", "vi", "*")
				if (res.data.length !== 0) {
					setMenuList(res.data[0].items)
				}
			} catch (e: any) {
				console.log("🚀 ~ fetchMenu ~ e:", e)
			}
		}
		fetchMenu()
	}, [])
	return (
		<>
			<NavigateFake />

			{menuList &&
				menuList.length !== 0 &&
				menuList.map((data, index) => {
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
