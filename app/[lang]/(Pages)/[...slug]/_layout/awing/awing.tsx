export default function Awing({
	children,
	params,
}: {
	children: React.ReactNode
	params: {
		lang: string
		slug: string
	}
}) {
    const {slug} = params
    console.log("🚀 ~ slug:", slug)
    return (
        <div>
            {children}
        </div>
    );
}