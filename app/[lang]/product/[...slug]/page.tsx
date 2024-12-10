export default function Product({
    params
}: {
    params: {
        lang: string,
        slug: string
    } 
}) {
    const {slug} = params
    return (
        <>
            <div className="categories">
                <div className="header__categories container bg-gradient-to-b from-white to-slate-300 relative">
                    <h1 className="text-2xl font-bold text-center py-10 xl:py-16">
                        Plugins Voucher khuyến mãi
                    </h1>
                </div>
                <div className="main__categories xl:flex items-center justify-center container">
                    <div className="main__content">
                        Product Page {slug}
                    </div>
                </div>
            </div>
        </>
    );
}