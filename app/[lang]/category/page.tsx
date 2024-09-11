import { cn } from "@/lib/utils";

export default async function Categories() {
    const URL_API = "https://ncmaz-ad-demo.lotusa.net/api/news-detail/programming-languages"
    const data = await fetch(URL_API)
    const posts = await data.json()
    const categories = posts.entity.categories

    return (
        <>
            <div className="categories">
                <div className="header__categories container bg-gradient-to-b from-white to-slate-300 relative">
                    <h1 className="text-2xl font-bold text-center py-10 xl:py-16">
                        Tổng hợp các danh mục
                    </h1>
                </div>
                <div className="main__categories xl:flex items-center justify-center container">
                    <div className="main__content">
                        <ul className="flex justify-center space-x-3 my-16">
                            {
                                categories && categories.map((item: any, index: number) => (<li className={cn(
                                    "px-3 py-1 shadow-sm rounded stroke-white stroke-2"
                                )} style={{ backgroundColor: JSON.parse(item).bgColor ? JSON.parse(item).bgColor : "#fff" }} key={index}>{JSON.parse(item).title}</li>))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}