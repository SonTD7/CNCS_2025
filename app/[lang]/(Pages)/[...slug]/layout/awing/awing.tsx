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
    return (
        <div>
            {children} Layout Awing
        </div>
    );
}