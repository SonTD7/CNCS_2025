import { useState, useEffect } from "react"

export function UseMediaQuery(query: string) {
    const [value, setValue] = useState(false)


    useEffect(() => {
        function onChange(event: MediaQueryListEvent) {
            setValue(event.matches)
        }
        const result = matchMedia(query)

        if (result?.addEventListener) {
            result.addEventListener('change', onChange);
        } else {
            result.addListener(onChange);
        }

        setValue(result.matches)

        return () => {result?.removeEventListener ? result.removeEventListener : result.removeListener }
    }, [query])

    return value
}