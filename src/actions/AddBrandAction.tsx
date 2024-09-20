"use server"

import { prisma } from "@/db/prisma";

export default async function AddBrandAction(formData:FormData) {
    const addBrand = await prisma.brand.create({
        data : {
            name : formData.get("name") as string
        }
    })

    return addBrand;
}