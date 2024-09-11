


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="content">
                <article>
                    {children}
                </article>
            </div>
        </>
    );
}