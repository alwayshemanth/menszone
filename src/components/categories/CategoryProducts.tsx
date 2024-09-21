import { prisma } from "@/db/prisma";

import CategoryItems from "../product-card/CategoryItems";

async function getProductsByCategory(categoryId : number | undefined) {
  // console.log(categoryId)
  const products = await prisma.product.findMany({
    where: {
      categoryId : categoryId
    },
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      imageUrl: true,
    },
  });
  // console.log(products)
  return products;
}

export default async function CategoryProducts({categoryId} : {categoryId : number | undefined}) {
  // console.log(categoryId)
  const productsByCategory = await getProductsByCategory(categoryId);
  // console.log(productsByCategory)
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
