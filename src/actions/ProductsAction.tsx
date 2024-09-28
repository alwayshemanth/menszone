"use server"

import { ProductQuerySchema, ProductQuerySchemaType } from "@/lib/schema";
import { getProductFilters } from "@/services/getProductFilters";

export default async function ProductsAction(searchParams : ProductQuerySchemaType) {
    const result = ProductQuerySchema.parse(searchParams)
    // console.log(result)
    const afterFiltering = await getProductFilters(result)
    // console.log(afterFiltering)
   return afterFiltering
}