import { prisma } from "@/db/prisma";
import ReviewCard from "./ReviewCard";


export default async function ReviewSection({productId} : {productId  : number | undefined}) {
    const reviews = await prisma.productReview.findMany({
        where : {
            productId : productId
        },
        select : {
            product_id : true,
            
            reviewDescription : true,
            emailhere : true
        }
    })

    // console.log(reviews)


    // console.log(reviews)
  return (
    <div className="space-y-4 ">
      
      {reviews.map((eachItem) => {
        return (
            <ReviewCard key = {eachItem.product_id} reviewDetails = {eachItem}/>
        )
      })}
    </div>
  );
}

