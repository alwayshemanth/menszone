import { prisma } from "@/db/prisma";

import CategoryItems from "../product-card/CategoryItems";

async function getProductsByCategory() {
  const products = await prisma.product.findMany({
    where: {
      categoryId: 4,
    },
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      imageUrl: true,
    },
  });

  return products;
}

export default async function CategoryProducts() {
  const productsByCategory = await getProductsByCategory();
  // console.log("Hi")
  // console.log(typeof(productsByCategory[0].price))
  // console.log(productsByCategory[0].price)

  return (
    <div className="grid grid-cols-3 gap-16 mt-10">
      {productsByCategory.map(function (eachItem) {
        return <CategoryItems key={eachItem.id} productDetails={eachItem} />;
      })}
    </div>
  );
}
