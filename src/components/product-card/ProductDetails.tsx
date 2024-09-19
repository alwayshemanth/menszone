import Image from "next/image";
import { Button } from "../ui/button";

export default function ProductDetails() {
  return (
    <div className="">
      <div className="bg-gray-50 pt-10 flex flex-col pl-96 pr-96">
        <div className="flex flex-row gap-10 border border-gray-400 rounded shadow-2xl">
          <Image
            src="https://shorturl.at/3ZR3t"
            alt="product-image"
            width={430}
            height={250}
          />
          <div className="pt-3">
            <h1> Black Printed Coffee Mug </h1>
            <h1>£15.00</h1>
            <p className="w-60">
              {" "}
              Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
              consectetur adipisci velit.
            </p>
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
