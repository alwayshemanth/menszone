"use server"

import { prisma } from "@/db/prisma";
import { auth } from "@/lib/auth";
import { getUserId } from "@/utlity";

export default async function AddCartAction(idOfProduct : number | undefined) {
    const session = await auth()
    // console.log(session)
    
    const userId = await getUserId(session) as string
    // console.log(userId)
    // console.log(idOfTheProduct)
    const idOfTheProduct = idOfProduct as number

    const addToCart = await prisma.cart.create({
        data : {
            userId : userId,
            productId : idOfTheProduct,
        }
    })

    console.log(addToCart)
    

}