import Image from "next/image";

import CardCard from "../cards/CartCard";
import ReviewSection from "./ReviewSection";
import CartButton from "../cards/CartButton";
import PostReview from "../cards/PostReview";
import { auth } from "@/lib/auth";

interface ProductType {
  id: number;
  name: string;
  description: string | null;
  imageUrl: string | null;
  price: number;
}

export default async function ProductDetails({
  productDetails,
}: {
  productDetails: ProductType | null;
}) {
  const session = await auth()
  
  // console.log(productDetails)


  // user: { email: 'user1@gmail.com' },
  // expires: '2024-10-28T10:18:18.226Z'

  const productId = productDetails?.id;
  return (
    <div className="">
      <div className="bg-gray-50 pt-10 flex flex-col pl-96 pr-96">
        <div className="flex flex-row gap-10 border border-gray-400 rounded shadow-2xl">
          {productDetails?.imageUrl && (
            <Image
              src={productDetails?.imageUrl}
              alt="product-image"
              width={430}
              height={250}
            />
          )}
          <div className="pt-3">
            <h1> {productDetails?.name} </h1>
            <p className="w-60"> {productDetails?.description}</p>
            <h1 className="mt-5"> ₹ {productDetails?.price}</h1>
            
            <CardCard />

            <CartButton productId = {productId} />
          </div>
        </div>

        <div className="flex flex-col items-start justify-center mt-10 gap-3">
          <h1> Product Description </h1>
          <p className="">
            {" "}
            {productDetails?.description}{" "}
          </p>
        </div>

        <div className="flex flex-col items-start justify-center mt-10 gap-3">
          <h1 className="font-bold"> Ratings & reviews </h1>
          <div>
            <PostReview productId = {productId} email = {session?.user?.email}/>
            <ReviewSection productId={productDetails?.id}/>
          </div>
        </div>
      </div>
    </div>
  );
}
