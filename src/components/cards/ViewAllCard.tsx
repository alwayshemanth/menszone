import { prisma } from "@/db/prisma";
import Image from "next/image";
import ArrowComonent from "./ArraowComponent";

export default async function ViewAllCard() {
  const products = await prisma.product.findMany({
    where: {
      categoryId: 1,
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
    take: 4,
  });

  return (
    <div className="border bg-white border-gray-300 p-5">
      <div className="flex flex-row justify-between pt-5 pb-5 pl-2 font-bold">
        <h1 className=""> Clothing </h1>
        <ArrowComonent />
        
      </div>
      <div className="grid grid-cols-2">
        {products.map((eachItem) => {
          return (
            <div key={eachItem.id} className="border border-gray-300 m-2 flex flex-col justify-between items-center">
              {eachItem.imageUrl && (
                <Image
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                  width={180}
                  height={180}
                />
              )}
              <h1> {eachItem.name} </h1>
              <h1> ` ₹{eachItem.discount} OFF` </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
