import ProductsAction from "@/actions/ProductsAction";
import { ProductQuerySchemaType } from "@/lib/schema";
import ProductCard from "./ProductCard";

export default async function ProductsComponents({searchParams} : {searchParams : ProductQuerySchemaType}) {
    // console.log(searchParams)
    const products = await ProductsAction(searchParams)
    // console.log(products)
    return (
        <div className="grid grid-cols-3 gap-16 mt-10">
           {products.map((eachProduct) => (
          <ProductCard key={eachProduct.id} productDetails={eachProduct} />
        ))}
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