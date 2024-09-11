import Listposts from "../../(home)/(section)/(website)/list-posts";

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
    title: string
    description: string
    listpost: Posts[]
}
export default function GridBasic({ data }: { data: Listposts }) {
    const { listpost, title, description } = data
    return (

        <section id="bloglist2" className="h-full">
            <div className="container flex flex-col py-16 xl:py-24 space-y-4 xl:space-y-8">
                <div className="bloglist-header flex flex-col space-y-4">
                    <h2 className="text-indigo-700 text-2xl xl:text-4xl font-bold dark:text-white">
                        {title}
                    </h2>
                    <p className="bloglist-subheading text-base text-gray-600 dark:!text-gray-300">
                        {description}
                    </p>
                </div>
                <div className="list-posst grid grid-cols-1 xl:grid-cols-2 gap-7 xl:gap-8">
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