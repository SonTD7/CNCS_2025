export const populatePages = {

	cover: {
		fields: ['url']
	},
	contentSections: {
		on: {
			"sections.article-section": {
				populate: "*",
			},
			"sections.landing-section-chapter": {
				populate: {
					chapterContents: {
						populate: "*",
					},
					chapterImage: {
						populate: "*",
					},
				},
			},
			"sections.landing-section-conslusion": {
				populate: "*",
			},
		},
	},
	categories: {
		populate: ["article"],
	},
}

