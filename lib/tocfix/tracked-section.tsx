import { HTMLProps, useContext, useEffect, useRef } from "react";
import { TOCContext } from "@/lib/tocfix/TOCContextType";
import { useScroll } from "framer-motion";

export default function TrackedSection({
    sectionId,
    tocTitle,
    isFirst = false,
    isLast = false,
    ...props }: {
        isFirst?: boolean
        isLast?: boolean
        sectionId?: number
        tocTitle?: string
    } & HTMLProps<HTMLElement>) {

        const {registerSection, setActiveSection} = useContext(TOCContext)

        useEffect(()=>{
            registerSection({id: sectionId?sectionId:0, title: tocTitle?tocTitle:""})
        },[])

        const container = useRef(null)
        const {scrollYProgress} = useScroll({
            target: container,
            offset: ["start center","end center"]
        })

        scrollYProgress.on('change', (value) => {
            if( value > 0 && value < 1) {
                setActiveSection(sectionId?sectionId:0)
            }
            if ((value <=0 && isFirst) || (value >= 1 && isLast)) {
                setActiveSection(-1)
            }
        })

    return (
        <section ref={container} id={`section-${sectionId}`} style={{scrollMargin: "40vh"}} {...props} />
    );
}