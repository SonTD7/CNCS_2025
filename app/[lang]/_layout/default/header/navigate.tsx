"use client"
import { useState, useEffect } from "react"
import { getMenu } from "@/app/[lang]/_utils/get-menu"
import Hot from "@/app/[lang]/_components/(menu)/Hot"
import Grid from "@/app/[lang]/_components/(menu)/Grid"
import Simple from "@/app/[lang]/_components/(menu)/Simple"
import { NavigateFake } from "./navigate-fake"

export function Navigate() {
	const [menuList, setMenuList] = useState([])
	useEffect(() => {
		async function fetchMenu() {
			try {
				let res = await getMenu("main-menu", "vi")
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
