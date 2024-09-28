"use server"

import { prisma } from "@/db/prisma";

export default async function PostReviewAction(email: string | null | undefined, productId: number | undefined, review: string) {
    // Ensure email and productId are valid
    if (email === null || productId === undefined || email === undefined) {
        console.error("Invalid input: email is null or productId is undefined");
        return null; // Handle as needed, e.g., return an error response
    }
    // console.log(email)
    // console.log(productId)
    // console.log(review)
    const productReview = await prisma.productReview.create({
        data: {
            reviewDescription: review,
            emailhere : email,
            productId: productId, // This should be a number and not undefined
        }
    });

    console.log("Done")

    // try {
    //     const productReview = await prisma.productReview.create({
    //         data: {
    //             reviewDescription: review,
    //             email: email,
    //             productId: productId, // This should be a number and not undefined
    //             rating : 4
    //         }
    //     });
        
    //     return productReview; // Return the created review
    // } catch (error) {
    //     console.error("Error creating product review:", error);
    //     throw new Error("Failed to create product review. Ensure the user and product exist.");
    // }
    return "well"
}
