import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Cross2Icon, TextAlignRightIcon } from "@radix-ui/react-icons";
import { ChevronRight } from "lucide-react";
import MobileLang from "./mobile-lang";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function MobileNavigate() {

    const [isOpen, setIsOpen] = React.useState(false)
    const [childOpen, setChildOpen] = React.useState(false)
    const [childCurrent, setChildCurrent] = useState("baiviet")
    const targetEle = useRef()
    const togleMenu = () => {
        setIsOpen(!isOpen)
    }
    const togleMenuChild = (e: any) => {
        const back = e.target.dataset.back ? e.target.dataset.back : false
        const child = e.target.dataset.child ? e.target.dataset.child : "baiviet"
        setChildOpen(!childOpen)
        setChildCurrent(child)
    }

    useEffect(() => {
        if (!isOpen) {
            setChildOpen(false)
        }
    }, [isOpen])

    return (
        <React.Fragment>
            <div className="bg-white dark:bg-black dark:text-white overflow-hidden">
                <TextAlignRightIcon className={cn("cursor-pointer",
                    isOpen ? "hidden" : ""
                )} width="32px" height="32px" onClick={togleMenu} />
                <Cross2Icon className={cn("cursor-pointer",
                    !isOpen ? "hidden" : ""
                )} width="32px" height="32px" onClick={togleMenu} />
                <div className={
                    cn("z-50 bg-gray-50  w-screen h-screen top-20 left-0 relative",
                        isOpen ? "fixed touch-none" : "hidden"
                    )}>
                    <div className="container bg-indigo-50 dark:bg-slate-800 dark:text-white h-full w-full">
                        <ul className="flex flex-col space-y-10 py-10 justify-evenly">
                            <li
                                className="flex justify-between  space-x-2 items-center cursor-pointer"
                                data-back={"false"}
                                data-child="baiviet"
                                onClick={togleMenuChild}>Bài viết
                                <ChevronRight className="pointer-events-none" width={20} height={20} />
                            </li>
                            <li
                                data-back={"false"}
                                data-child="congcu"
                                onClick={togleMenuChild}
                                className="flex justify-between  space-x-2 items-center cursor-pointer">Công cụ
                                <ChevronRight className="pointer-events-none" width={20} height={20} />
                            </li>
                            <li
                                data-back={"false"}
                                data-child="tainguyen"
                                onClick={togleMenuChild}
                                className="flex justify-between  space-x-2 items-center cursor-pointer">Tài nguyên
                                <ChevronRight className="pointer-events-none" width={20} height={20} />
                            </li>
                            <li
                                data-back={"false"}
                                data-child="vetoi"
                                onClick={togleMenuChild}
                                className="flex justify-between  space-x-2 items-center cursor-pointer">Về tôi
                                <ChevronRight
                                    className="pointer-events-none"
                                    width={20} height={20} />
                            </li>

                            <li className="flex justify-between  space-x-2 items-center">
                                <MobileLang />
                            </li>

                        </ul>


                    </div>

                    <div className="tabcontent" >
                        <div data-child="baiviet" className={cn(
                            "baiviet h-screen w-full bg-gray-100 dark:bg-slate-800 dark:text-white z-[60] fixed transition-all duration-500  top-20 container ",
                            childCurrent == "baiviet" && childOpen ? "" : "translate-x-full"
                        )}>
                            <div className="header--mnu flex justify-between items-center py-10">
                                <h3 className="text-xl uppercase">Bài Viết</h3>
                                <Button
                                    onClick={togleMenuChild}
                                    data-back={"true"}
                                    variant={"outline"} > Back </Button>
                            </div>

                            <div className="acco ">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="flex flex-col space-y-2">
                                                <li className="border bg-white dark:bg-slate-800 dark:text-white px-2 py-1">
                                                    This is title of Arti
                                                </li>
                                                <li className="border bg-white dark:bg-slate-800 dark:text-white px-2 py-1">
                                                    This is title of Arti
                                                </li>
                                                <li className="border bg-white dark:bg-slate-800 dark:text-white px-2 py-1">
                                                    This is title of Arti
                                                </li>
                                                <li className="border bg-white dark:bg-slate-800 dark:text-white px-2 py-1">
                                                    This is title of Arti
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It comes with default styles that matches the other
                                            components&apos; aesthetic.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It's animated by default, but you can disable it if you prefer.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>


                        <div data-child="congcu" className={cn(
                            "congcu h-screen w-full bg-gray-100 z-[60] fixed transition-all duration-500  top-20 container ",
                            childCurrent == "congcu" && childOpen ? "" : "translate-x-full"
                        )}>
                            <div className="header--mnu flex justify-between items-center py-10">
                                <h3 className="text-xl uppercase">Công cụ</h3>
                                <Button
                                    onClick={togleMenuChild}
                                    data-back={"true"}
                                    variant={"outline"} > Back </Button>


                            </div>

                            <div className="acco">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It comes with default styles that matches the other
                                            components&apos; aesthetic.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It's animated by default, but you can disable it if you prefer.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                        <div data-child="tainguyen" className={cn(
                            "baiviet h-screen w-full bg-gray-100 z-[60] fixed transition-all duration-500  top-20 container ",
                            childCurrent == "tainguyen" && childOpen ? "" : "translate-x-full"
                        )}>
                            <div className="header--mnu flex justify-between items-center py-10">
                                <h3 className="text-xl uppercase">Tài Nguyên</h3>
                                <Button
                                    onClick={togleMenuChild}
                                    data-back={"true"}
                                    variant={"outline"} > Back </Button>


                            </div>

                            <div className="acco">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It comes with default styles that matches the other
                                            components&apos; aesthetic.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It's animated by default, but you can disable it if you prefer.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                        <div data-child="vetoi" className={cn(
                            "baiviet h-screen w-full bg-gray-100 z-[60] fixed transition-all duration-500  top-20 container ",
                            childCurrent == "vetoi" && childOpen ? "" : "translate-x-full"
                        )}>
                            <div className="header--mnu flex justify-between items-center py-10">
                                <h3 className="text-xl uppercase">Về tôi</h3>
                                <Button
                                    onClick={togleMenuChild}
                                    data-back={"true"}
                                    variant={"outline"} > Back </Button>


                            </div>

                            <div className="acco">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It comes with default styles that matches the other
                                            components&apos; aesthetic.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It's animated by default, but you can disable it if you prefer.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </React.Fragment>
    );
}