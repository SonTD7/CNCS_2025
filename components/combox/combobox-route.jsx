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

const frameworks = [
    {
        value: "plugins",
        label: "Mua Plugins",
    },
    {
        value: "kechuyen",
        label: "Chuyện cuộc đời",
    },
    {
        value: "wordpress",
        label: "Nghịch wordpress",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    }


]

export function ComboboxRoute() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const router = useRouter()

    React.useEffect(() => {
        if (value) {
            // window.location.href = value
            router.push(value)
        }
    }, [value]);

    return (
        <Popover open={open} onOpenChange={setOpen} className={fahkwang.className}>
            <PopoverTrigger asChild>
                <Button
                    variant="link"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between underline font-bold text-indigo-500 hover:text-cyan-800 bg-white"
                >
                    {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : "Chọn câu chuyện..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className={cn(
                fahkwang.className,
                "w-[200px] p-0"
            )}
            >
                <Command>
                    <CommandInput placeholder="Tìm câu chuyện..." />
                    <CommandList>
                        <CommandEmpty>Không tìm thấy.</CommandEmpty>
                        <CommandGroup >
                            {frameworks.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {framework.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
