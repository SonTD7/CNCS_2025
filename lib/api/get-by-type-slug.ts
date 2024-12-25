import { fetchAPI } from "./fetch-api";

export async function getByTypeSlug(api: string, slug: string, lang: string, populate:any = "*") {
    // const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    // const urlParamsObject = {filters: {slug}, locale: lang};
    const urlParamsObject = {
        filters: {
            slug,
        },
        locale: lang,
        populate: populate
    };

    // const options = { headers: { Authorization: `Bearer ${token}` } };
    const options = {};
    return await fetchAPI(api, urlParamsObject, options);
}
