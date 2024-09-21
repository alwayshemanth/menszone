import Image from "next/image";
import { Button } from "../ui/button";

interface ProductType {
  id: number;
  name: string;
  description: string | null;
  imageUrl: string | null;
  price: number;
}

export default function ProductDetails({
  productDetails,
}: {
  productDetails: ProductType | null;
}) {
  // console.log(productDetails)
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
            <div className="flex mt-8">
              <button className="w-10 bg-gray-200"> - </button>
              <p className="text-center w-10 bg-gray-500 text-white"> 0 </p>
              <button className="w-10 bg-gray-200"> + </button>
            </div>

            <Button className="mt-8 bg-gray-500 text-white" variant={"outline"}>
              {" "}
              Add to cart{" "}
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center mt-10 gap-3">
          <h1> Product Description </h1>
          <p className="">
            {" "}
            At Adro, we believe that fashion should be accessible to everyone,
            and our brand is designed to offer high-quality clothing that is
            both stylish and affordable.{" "}
          </p>
        </div>

        <div className="flex flex-col items-start justify-center mt-10 gap-3">
          <h1> Customer reviews </h1>
        </div>
      </div>
    </div>
  );
}
