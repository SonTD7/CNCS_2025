import { ReactElement, lazy, createElement, Suspense } from 'react';
import Loader from '@/components/themes/default/header/loader';
import { LAYOUT_CONFIG } from '../constants/config';
export default function componentResolverRoute(section: any, index: number, route?: string): ReactElement {

    // Component names do look like 'category.component-name' => lowercase and kebap case
    const names: string[] = section.__component.split('.')
    const category = names[0]
    const component = names[1]
    //console.log(`ComponentResolver: Category => ${category} | Component => ${componentName} | Path => ../components/${componentName}`)

    // The path for dynamic imports cannot be fully dynamic.
    // Webpack requires a static part of the import path at the beginning. 
    // All modules below this path will be included in the bundle and be available for dynamic loading
    // Besides, this will result in code splitting and better performance.
    // See https://webpack.js.org/api/module-methods/#import-1

    // Use react lazy loading to import the module. By convention: The file name needs to match the name of the component (what is a good idea)
    let mymodule = route ?
        lazy(() => import(`@/components/themes/${LAYOUT_CONFIG}/${route}/${component}`)) :
        lazy(() => import(`@/components/themes/${LAYOUT_CONFIG}/${component}`))

    // Create react element. The 'type' argument needs to be a FunctionComponent, not a string
    const reactElement = createElement(mymodule, { data: section, key: index })

    return (
        typeof window !== "undefined" ?
            (<Suspense fallback={<Loader locale={"vi"} dicts={null} />} key={index} >
                {reactElement}
            </Suspense>) :
            reactElement
    )
}