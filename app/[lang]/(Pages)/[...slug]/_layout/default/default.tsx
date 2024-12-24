import Faqs from "./Faqs"

export default function Default({
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
        <>
           <Faqs />
        </>
    );
}