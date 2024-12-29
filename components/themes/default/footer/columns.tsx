import { ItemLink, ItemLinkType } from "./helpers"
export default function Columns({
	title,
	data,
}: {
	title: string
	data: ItemLinkType[]
}) {
	return (
		<>
			<div className="lg:mx-auto text-center sm:text-left">
				<h4 className="text-lg text-gray-900 font-medium mb-7 dark:text-white">
					{title}
				</h4>
				<ul className="text-sm  transition-all duration-500">
					{data.length !== 0 &&
						data.map(({ title, slug }, index) => (
							<ItemLink title={title} slug={slug} key={index} />
						))}
				</ul>
			</div>
		</>
	)
}

// cok