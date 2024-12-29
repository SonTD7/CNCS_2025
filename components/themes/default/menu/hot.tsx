import * as React from "react"
import { cn } from "@/lib/utils/utils"
import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Props } from "./helpers"

export default function Hot({ data }: Props) {
    const { children, title } = data
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger className="dark:text-white">{title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid gap-3 space-x-6 p-4 py-10 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">

                    {
                        children.map(({ title, url, summary }, index) => index !== 0 ? (
                            <ListItem href={url} title={title} key={index}>
                                {summary}
                            </ListItem>
                        ) :
                            (
                                <li className="row-span-3" key={index}>
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href={url}
                                        >
                                            <div className="mb-2 mt-4 text-base font-medium dark:text-white">
                                                {title}
                                            </div>
                                            <p className="text-base leading-tight text-muted-foreground">
                                                {summary}
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                            ))
                    }
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-base font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-base leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
// ok