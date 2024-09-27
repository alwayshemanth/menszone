"use client"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import Icon from "../ui/icon"

export default function FilterComponent() {
    return (
        <div className="flex flex-row gap-5 justify-end">
            <div className="flex flex-row items-center px-1 ">
                <Popover>
                    <PopoverTrigger className="bg-neutral-900 rounded-full p-3 cursor-pointer">
                        <Icon icon="filter" className="cursor-pointer" size="20" />
                    </PopoverTrigger>
                    <PopoverContent className=" bg-background border-none shadow-none">

                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}