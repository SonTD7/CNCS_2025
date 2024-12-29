import Faqs from "./faqs"
import Contact from "./contact"
import ContactSecond from "./contact-second"
export default function Route({
	children,
	params,
}: {
	children: React.ReactNode
	params: {
		lang: string
		slug: string
	}
}) {
	const { slug } = params
	console.log("🚀 ~ slug:", slug)
	return (
		<>
			{
				slug[0] == 'faqs' && <Faqs />
			}
			{
				slug[0] == 'contact' && <Contact /> 
			}
			{
				slug[0] == 'contact2' && <ContactSecond />
			}
			

		</>
	);
}