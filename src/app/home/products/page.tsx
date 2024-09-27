import AllProducts from "@/components/product-card/AllProducts";
import { ProductQuerySchemaType } from "@/lib/schema";

export default function products({ searchParams }: { searchParams: ProductQuerySchemaType }) {
    return (
        <div>
            <AllProducts searchParams = {searchParams}/>
        </div>
    )
}