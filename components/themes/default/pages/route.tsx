import {slugToComponentName} from "@/lib/utils/utils"
export default function Route({
	children,
	params,
}: {
	children: React.ReactNode
	params: {
		lang: string
		slug: string
	}
}) {
	const { slug } = params
	const FLayout = slugToComponentName(slug[0], "fallback/pages")
	return <FLayout />
}