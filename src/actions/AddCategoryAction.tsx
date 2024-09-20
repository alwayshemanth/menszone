"use server"

import { prisma } from "@/db/prisma";

export default async function AddCategoryAction(formData:FormData) {
    const addCategory = await prisma.category.create({
        data : {
            name : formData.get("name") as string
        }
    })

    return addCategory
}