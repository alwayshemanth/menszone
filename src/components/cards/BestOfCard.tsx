import { prisma } from "@/db/prisma";
import Image from "next/image";
import ArrowComonent from "./ArraowComponent";


export default async function BestOfCard() {
  const products = await prisma.product.findMany({
    where: {
      categoryId: 3,
    },
    select: {
      id: true,
      name: true,
      discount: true,
      imageUrl: true,
    },
    orderBy: {
      id: "desc",
    },
    take: 10,
  });

  return (
    <div className="flex flex-col border bg-white border-gray-300 p-5 mt-10 ml-9 mr-9 ">
      <div className="flex flex-row justify-between pt-5 pb-5 pl-2 font-bold">
        <h1 className=""> Clothing </h1>
        <ArrowComonent />
        
      </div>
      <div className="grid grid-cols-6">
        {products.map((eachItem) => {
          return (
            <div
              key={eachItem.id}
              className="border border-gray-300 m-2 flex flex-col justify-between"

            >
              {eachItem.imageUrl && (
                <Image
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                  width={180}
                  height={180}
                />
              )}
              <div className="text-center mb-4">
              <h1> {eachItem.name} </h1>
              <h1> ` ₹{eachItem.discount} OFF` </h1>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
