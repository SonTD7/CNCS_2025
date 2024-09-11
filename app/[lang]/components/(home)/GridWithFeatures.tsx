import Listposts from "../../(home)/(section)/(website)/list-posts"

interface document {
    id: number,
    locale: string,
    shortName: string,
    slug: string,
    title: string,
    cover: cover
}
interface cover {
    url: string
}
interface Posts {
    id: number,
    isPage: boolean,
    page: document,
    article: document
}

interface Listposts {
    listpost: Posts[]
    features: Posts
}

export default function GridWithFeatures({ data }: { data: Listposts }) {
    const { listpost, features } = data
    return (

        <section className="bg-white dark:bg-slate-600 h-full flex flex-col justify-center items-center space-y-11 mt-10 xl:mt-20" id="home-website">
            <div className="container flex flex-col justify-between items-center space-y-4 xl:space-y-0 xl:gap-4 xl:grid xl:grid-cols-2 xl:items-stretch xl:place-content-between">
                <Listposts item={features} position={1} />
                <div className="flex flex-col space-y-8">
                    {
                        listpost.map((post, index) => {
                            return (
                                <Listposts item={post} key={index} position={0} />
                            )
                        })
                    }
                </div>
            </div>
        </section>

    );
}