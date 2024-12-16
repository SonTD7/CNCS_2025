import { ComponentType, lazy } from "react"
import RootLayout from "./(layout)/layout-smooth"
import { getDictionary } from "./dictionaries"

const Lay: ComponentType<any> = lazy(() => import("./(layout)/layout-default"))
const data: string = "default"
const LAYOUT_CONFIG = data ?? "smooth"
console.log("🚀 ~ LAYOUT_CONFIG:", LAYOUT_CONFIG)

export default async function Layout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: { lang: string }
}>) {
	const dicts = await getDictionary(params.lang)

	return (
		<>
			{LAYOUT_CONFIG == "smooth" ? (
				<RootLayout params={params}> {children} </RootLayout>
			) : (
				<Lay params={params} dicts={dicts}>
					{children}
				</Lay>
			)}
		</>
	)
}
