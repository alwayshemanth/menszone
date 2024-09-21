import { prisma } from "@/db/prisma";
import { Session } from "next-auth";

export async function getCategory(category : string) {
    const getCategoryId = await prisma.category.findUnique({
        select : {
            id : true
        },
        where : {
            name : category
        }
    })

    const categoryId = getCategoryId?.id
    return categoryId;
}

// get userId by email

export async function getUserId(session : Session | null ) {

    // console.log(session?.user?.email)
    const emailOfUser = session?.user?.email as string
    const idOfTheUser = await prisma.user.findFirst({
        where : {
            email : emailOfUser
        }
    })
    const idByEmail = idOfTheUser?.id

    return idByEmail;
}