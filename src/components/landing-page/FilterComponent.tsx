"use client"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import Icon from "../ui/icon"
import { ProductQuerySchemaType } from "@/lib/schema"
import ProductFilters from "../categories/ProductFilters"

export default function FilterComponent({searchParams} : {searchParams : ProductQuerySchemaType}) {
    return (
        <div className="flex flex-row gap-5 justify-end">
            <div className="flex flex-row items-center px-1 ">
                <Popover>
                    <PopoverTrigger className="bg-neutral-900 rounded-full p-3 cursor-pointer">
                        <Icon icon="filter" className="cursor-pointer" size="20" />
                    </PopoverTrigger>
                    <PopoverContent className=" bg-transparent border-none shadow-none mr-16">
                        
                        <ProductFilters searchParams = {searchParams} />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}