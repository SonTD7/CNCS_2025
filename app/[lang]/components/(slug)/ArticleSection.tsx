"use client"
import TrackedSection from "../../utils/tracked-section";
import dompurify from "isomorphic-dompurify";

interface Child {
    text: string
    type: string
}
interface Content {
    type: string
    children: Child[]
}

interface props {
    id: number
    h2: string
    contents: Content[]
    content: string
}

export default function ArticleSection({ data }: { data: props }) {
    const { h2, id, content } = data
    const sanitizer = dompurify.sanitize;

    return (
        <TrackedSection
            sectionId={id}
            isFirst
            tocTitle={h2}
        >
            <h2>{h2}</h2>
            <div className="dark:text-white dark:bg-slate-600" dangerouslySetInnerHTML={{ __html: sanitizer(content)}}></div>
        </TrackedSection>
    );
}