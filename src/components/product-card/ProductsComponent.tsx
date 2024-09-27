import ProductsAction from "@/actions/ProductsAction";
import { ProductQuerySchemaType } from "@/lib/schema";

export default async function ProductsComponents({searchParams} : {searchParams : ProductQuerySchemaType}) {
    // console.log(searchParams)
    const products = await ProductsAction(searchParams)
    // console.log(products)
    return (
        <div>
            hi
        </div>
    )
}






































/*
{
  category: [ 'clothing', 'grooming' ],
  rating: [ '1' ],
  sortby: 'postedat_desc',
  page: 1
}
*/