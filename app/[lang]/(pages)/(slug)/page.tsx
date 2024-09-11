export default async function Page({ params }: { params: { slug: string } }) {

    const { slug } = params
    const url = 'https://api.vercel.app/blog'
    let data = await fetch(url)
    let posts = await data.json()

    return (
        <div>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>{post.title + slug}</li>
                ))}
            </ul>
        </div>
    );
}