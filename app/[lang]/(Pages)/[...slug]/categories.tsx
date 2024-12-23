import Link from 'next/link'

interface category {
    id: number
    title: string
    locale: string
    description: string
}
export default function Categories({ categories }: { categories: category[] }) {
    return (
        <div className="max-w-[700px] mx-auto border-t border-gray-500 border-opacity-20">
            <div className="mx-auto flex space-x-5 xl:space-x-8 items-center xl:max-w-[700px] mt-4 xl:mt-10">
                <span>#Danh Mục: </span>
                <div className="space-x-4 xl:space-x-6flex justify-center items-center text-center">
                    {
                        categories && categories.map(({ title, description }, index) => (
                            <Link className="bg-slate-300 shadow-sm rounded-lg p-1 px-4" href={title} title="title" key={index}> #{title} </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}