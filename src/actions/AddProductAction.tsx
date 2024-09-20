"use server";

import { prisma } from "@/db/prisma";

export default async function AddProductAction(formData: FormData) {
  try {
    const addProduct = await prisma.product.createMany({
      data: {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        categoryId: parseInt(formData.get("categoryId") as string),
        brandId: formData.get("brandId") ? parseInt(formData.get("brandId") as string) : null,
        price: parseFloat(formData.get("price") as string),
        stockQuantity: parseInt(formData.get("stockQuantity") as string),
        weight: formData.get("weight") ? parseFloat(formData.get("weight") as string) : null,
        discount: formData.get("discount") ? parseFloat(formData.get("discount") as string) : null,
        imageUrl: formData.get("imageUrl") as string,
      },
    });

    console.log("Success")
    console.log(addProduct)
    console.log("Success")

    return addProduct;
  } catch (error) {
    console.error("Error adding product:", error);
    throw new Error("Failed to add product."); 
  }
}
