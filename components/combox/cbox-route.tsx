"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Fahkwang } from 'next/font/google'
import { useRouter } from 'next/navigation'

const fahkwang = Fahkwang({
    subsets: ['vietnamese'],
    weight: ['200', '300', '400', '500', '600', '700'],
    variable: '--font-fahkwang'
})
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


interface frameworkItem {
    url: string
    title: string
}

interface Props {
    title: string
    type?: string
    frameworks: Array<frameworkItem>
}

export function CboxRoute(Props: Props) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const router = useRouter()
    const { frameworks, title , type} = Props

    React.useEffect(() => {
        router.push(value)
    }, [value]);


    return (
        <Popover open={open} onOpenChange={setOpen} >
            <PopoverTrigger asChild>
                <Button
                    variant= "indigo"//{type? type : "indigo"}
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] flex  justify-between items-center 1underline font-bold dark:bg-slate-700"
                >
                    {value
                        ? frameworks.find((framework) => framework.url === value)?.title
                        : `Chọn ${title}...`}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className={cn(
                fahkwang.className,
                "w-[200px] p-0"
            )}
            >
                <Command>
                    <CommandInput placeholder={`Tìm ${title}...`} />
                    <CommandList>
                        <CommandEmpty>Không tìm thấy.</CommandEmpty>
                        <CommandGroup >
                            {frameworks.map((framework) => (
                                <CommandItem
                                    key={framework.url}
                                    value={framework.url}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === framework.url ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {framework.title}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
