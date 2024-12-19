import { fetchAPI } from "@/app/[lang]/_utils/fetch-api";

export async function getMenu(slug: string, lang: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    const path = `/tree-menus/menu`;
    // const urlParamsObject = {filters: {slug}, locale: lang};
    const urlParamsObject = {
        filters: {
            slug,
        },
        locale: lang
    };

    const options = { headers: { Authorization: `Bearer ${token}` } };
    return await fetchAPI(path, urlParamsObject, options);
}
