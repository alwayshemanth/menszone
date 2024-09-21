"use client"

import AddCartAction from "@/actions/AddCartAction";
import { Button } from "../ui/button";




export default function CartButton({productId} : {productId : number | undefined}) {
    const idOfTheProduct = productId

    async function addcarthandler() {
        await AddCartAction(idOfTheProduct)
        
        // await AddCartAction()
    }
    // const {data : session, status} = useSession();
    // console.log(session)
    return (
        <Button className="mt-8 bg-gray-500 text-white" variant={"outline"} onClick={addcarthandler}>
              {" "}
              Add to cart{" "}
            </Button>
    )
}