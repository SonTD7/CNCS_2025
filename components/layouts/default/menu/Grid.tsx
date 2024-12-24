import * as React from "react"
import { cn } from "@/lib/utils"
import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { Props} from "./helpers"


export default function Grid({ data }: Props) {
    const { children, title } = data
    const components: { title: string, href: string, description: string }[] = children.map(({ title, url, summary }) => ({ title: title, href: url, description: summary }))
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger className="dark:text-white">{title}</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 py-10 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
                    {components.map((component) => (
                        <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                        >
                            {component.description}
                        </ListItem>
                    ))}
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
