// { params: { id: '10' }, searchParams: {} }

import ProductDetails from "@/components/product-card/ProductDetails"
import { prisma } from "@/db/prisma"

interface PropsType {
    params : {
        id : string
    },
    searchParams : object
}
export default async function product(props:PropsType) {
    //  console.log(props)
    const productId = Number(props.params.id)

    // console.log(productId) 

    const product = await prisma.product.findFirst({
        where : {
            id : productId
        },
        select : {
            id : true,
            name : true,
            description : true,
            imageUrl : true,
            price:true
        }
    })

    // console.log(product)
    return (
        <>
            <ProductDetails key = {product?.id} productDetails = {product}/>
        </>
    )
}