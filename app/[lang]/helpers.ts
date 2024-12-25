export const dataSample = {
    id: 1,
    url: "https://www.youtube.com/watch?v=Qr7Ng6fpqnk",
    width: "100%",
    height: "100%",
};
export type Props = {
    params: {
        lang: string;
        slug: string;
    };
};
export const populateGlobal = [
    // "metadata.shareImage",
    // "favicon",
    // "notificationBanner.link",
    // "navbar.links",
    // "navbar.navbarLogo.logoImg",
    // "footer.footerLogo.logoImg",
    // "footer.menuLinks",
    // "footer.legalLinks",
    // "footer.socialLinks",
    // "footer.categories",
];

export const populateHomeRe = {
    cover: {
        fields: ["url", "title"],
    },
    contentSections: {
        on: {
            "sections.home-banner": {
                populate: ["listlink"],
            },
            "sections.grid-with-features": {
                populate: {
                    listpost: {
                        populate: {
                            page: {
                                populate: "*",
                            },
                            article: {
                                populate: "*",
                            },
                        },
                    },
                    features: {
                        populate: {
                            page: {
                                populate: "*",
                            },
                            article: {
                                populate: "*",
                            },
                        },
                    },
                },
            },
            "sections.grid-basic": {
                populate: {
                    listpost: {
                        populate: {
                            page: {
                                populate: "*",
                            },
                            article: {
                                populate: "*",
                            },
                        },
                    },
                },
            },
            "sections.route-box": {
                populate: "*",
            },
            "sections.grid-hub": {
                populate: {
                    resource: {
                        populate: {
                            cover: {
                                populate: "*",
                            },
                            listpost: {
                                populate: {
                                    page: {
                                        populate: "*",
                                    },
                                    article: {
                                        populate: "*",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
