import { prisma } from "@/db/prisma";

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

