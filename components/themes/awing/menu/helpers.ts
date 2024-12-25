export interface Items {
    title: string
    url: string
    summary: string
}

export interface Layout {
    title: string
    children: Items[]
    url: string
    summary: string
}
export interface Props {
    data: Layout
}
