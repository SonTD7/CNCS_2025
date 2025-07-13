import qs from "qs";
import { getStrapiURL } from "./helpers";

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  try {
    // Tạo query string
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Merge option + header
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      ...options,
    };

    console.log("🔗 Request:", requestUrl);

    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      throw new Error(`API returned ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.warn("⚠️ API not reachable, using MOCK data instead.", error);

    // Đây là dữ liệu MOCK bạn tự định nghĩa
    return {
      data: [
        {
          id: 1,
          attributes: {
            title: "Mock Title",
            description: "This is mock content because API failed.",
          },
        },
      ],
    };
  }
}
