export default function RootLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: {
        lang: string,
        slug: string
    }
}) {
    return (
        <>
            {children}
        </>
    );
}