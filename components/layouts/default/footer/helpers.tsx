import Link from "next/link"
export interface ItemLinkType {
	title: string
	slug: string
}

export function ItemLink({
	title = "Link",
	slug = "/",
}: {
	title: string
	slug: string
}) {
	return (
		<li className="mb-6">
			<Link
				href={slug}
				className="text-gray-600 dark:text-slate-400 hover:text-gray-900"
			>
				{title}
			</Link>
		</li>
	)
}

export const dataColumns = [
	{
		title: "Lotusa",
		data: [
			{
				title: "Home",
				slug: "",
			},
			{
				title: "About",
				slug: "",
			},
			{
				title: "Pricing",
				slug: "",
			},
			{
				title: "Features",
				slug: "",
			},
		],
	},
	{
		title: "Products",
		data: [
			{
				title: "Figma UI System",
				slug: "",
			},
			{
				title: "Icons Assets",
				slug: "",
			},
			{
				title: "Responsive Blocks",
				slug: "",
			},
			{
				title: "Components Library",
				slug: "",
			},
		],
	},
	{
		title: "Resources",
		data: [
			{
				title: "FAQs",
				slug: "",
			},
			{
				title: "Quick Start",
				slug: "",
			},
			{
				title: "Documentation",
				slug: "",
			},
			{
				title: "User Guide",
				slug: "",
			},
		],
	},
	{
		title: "Blogs",
		data: [
			{
				title: "News",
				slug: "",
			},
			{
				title: "Tips & Tricks",
				slug: "",
			},
			{
				title: "New Updates",
				slug: "",
			},
			{
				title: "Events",
				slug: "",
			},
		],
	},
]
