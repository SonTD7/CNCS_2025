import  * as React from "react"
import { cn } from "@/lib/utils/utils"
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

interface Layout {
  title: string
  url: string
}

interface Props {
  data: Layout
}

export default function Simple({data}: Props) {
  const {title, url } = data
    return (
        <NavigationMenuItem>
          <Link href={url} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {title}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
    );
}
// ok