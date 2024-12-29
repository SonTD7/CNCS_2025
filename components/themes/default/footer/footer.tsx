import Columns from "./columns"
import { dataColumns } from "./helpers"
import Info from "./info"

export default function Footer() {
	return (
		<footer className="w-full bg-gray-200/[80%] dark:bg-black dark:text-white">
			<div className="container">
				<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
					<Info />
					{dataColumns.length !== 0 &&
						dataColumns.map(({ title, data }, index) => (
							<Columns title={title} data={data} key={index} />
						))}
				</div>

				<div className="py-7 border-t border-gray-200">
					<div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
						<span className="text-sm text-gray-500 ">
							©<a href="https://pagedone.io/">pagedone</a>2024,
							All rights reserved.
						</span>
						<ul className="flex items-center gap-9 mt-4 lg:mt-0">
							<li>
								<a href="#" className="text-sm text-gray-500">
									Terms
								</a>
							</li>
							<li>
								<a href="#" className="text-sm text-gray-500">
									Privacy
								</a>
							</li>
							<li>
								<a href="#" className="text-sm text-gray-500">
									Cookies
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

// ok