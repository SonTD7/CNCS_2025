import { ReactElement, lazy, createElement, Suspense, memo, useMemo } from 'react';

export default function menuResolverRouter(layout: any, index: number, route: string): ReactElement {

    let componentName = ''

    componentName = capitalizeFirstLetter(layout.layout)

    let mymodule = memo(lazy(() => import(`../components/(${route})/${componentName}`)))
    // let mymodule = lazy(() => import(`../components/(${route})/${componentName}`))

    const reactElement = createElement(mymodule, { data: layout, key: index })

    return (
        typeof window !== "undefined" ?
            (<Suspense fallback={null} key={index} >
                {reactElement}
            </Suspense>) :
            reactElement
    )
}

function capitalizeFirstLetter(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}