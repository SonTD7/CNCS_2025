"use client"
import * as React from "react"
import { cn } from "@/lib/utils/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import MobileLang from "./mobile-lang"
import { Navigate } from "./navigate"
import { fahkwang } from "@/lib/constants/fonts"

export function Navigation() {
  return (
    <NavigationMenu className={fahkwang.className}>
      <NavigationMenuList>
        {/* resolver menu by Name */}
        <Navigate />
        {/* language components */}
        <NavigationMenuItem>
          <MobileLang />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
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