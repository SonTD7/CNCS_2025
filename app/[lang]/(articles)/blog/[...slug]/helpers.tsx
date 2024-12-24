export const populateArticles = {
    contentSections: {
        on: {
            'sections.article-section': {
                populate: '*'
            },
            'sections.landing-section-chapter': {
                populate: {
                    'chapterContents': {
                        populate: "*"
                    },
                    'chapterImage': {
                        populate: '*'
                    }
                }
            },
            'sections.landing-section-conslusion': {
                populate: "*"
            }
        }
    },
    'cover': {
        fields: ['url']
    },
    'headerCover': {
        fields: ['url']
    },
    categories: {
        populate: ['article']
    }
}