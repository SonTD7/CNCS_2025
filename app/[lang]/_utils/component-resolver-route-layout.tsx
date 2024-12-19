import { ReactElement, lazy, createElement, Suspense } from 'react';
import Loader from '../_layout/default/header/loader';
import { getDictionary } from '../get-dictionary';

export default function componentResolverRouteLayout(section: any, index: number, route: string, layout: string): ReactElement {
    // Component names do look like 'category.component-name' => lowercase and kebap case
    const names: string[] = section.__component.split('.')

    // Get category name
    const category = names[0]

    // Get component name
    const component = names[1]

    // Convert the kebap-case name to PascalCase
    const parts: string[] = component.split('-')

    let componentName = ''

    parts.forEach(s => {
        componentName += capitalizeFirstLetter(s)
    })

    let mymodule = componentName.startsWith('Article') && layout == "blogArticle" ?
        lazy(() => import(`../_components/(${route})/${componentName}`)) :
        componentName.startsWith('Landing') && layout == "hotLanding" ?
            lazy(() => import(`../_components/(${route})/${componentName}`)) :
            "null"

    // let mymodule = lazy(() => import(`../components/(${route})/${componentName}`))
    const reactElement = createElement(mymodule, { data: section, key: index })
    
    return (
        mymodule != "null" ? (typeof window !== "undefined" ?
            (<Suspense fallback={<Loader locale={"vi"} dicts={null}/>} key={index} >
                {reactElement}
            </Suspense>) :
            reactElement) : <></>
    )
}

function capitalizeFirstLetter(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}