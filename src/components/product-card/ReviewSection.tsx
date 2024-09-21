import { prisma } from "@/db/prisma";
import ReviewCard from "./ReviewCard";


export default async function ReviewSection({productId} : {productId  : number | undefined}) {
    const reviews = await prisma.productReview.findMany({
        where : {
            product_id : productId
        },
        select : {
            product_id : true,
            rating : true ,
            reviewDescription : true,
            email : true
        }
    })


    // console.log(reviews)
  return (
    <div>
      {reviews.map((eachItem) => {
        return (
            <ReviewCard key = {eachItem.product_id} reviewDetails = {eachItem}/>
        )
      })}
    </div>
  );
}

