import { prisma } from "@/db/prisma";
import { ProductQuerySchemaType } from "@/lib/schema";
import { Prisma } from "@prisma/client";

export async function getProductFilters(result: ProductQuerySchemaType) {
  const { category, rating, pricerange, search } = result;

  const filters: Prisma.ProductWhereInput[] = [
    category && category.length > 0
      ? { category: { name : { in: category} } }
      : undefined, 

    rating && rating.length > 0 ? { rating: { in: rating } } : undefined,

    pricerange && pricerange.length > 0
      ? {
          OR: pricerange.map((range: string) => ({
            AND: [
              { price: { gte: Number(range.split("-")[0]) } },
              { price: { lte: Number(range.split("-")[1]) } },
            ],
          })),
        }
      : undefined,

    search
      ? {
          name: {
            contains: search,
            mode: "insensitive",
          },
        }
      : undefined,
  ].filter(Boolean) as Prisma.ProductWhereInput[];

  const where: Prisma.ProductWhereInput | undefined =
    filters.length > 0 ? { AND: filters } : undefined;

  const filteredProducts = await prisma.product.findMany({
    where,
    include: {
      category: true, 
    }
  });

  return filteredProducts;
}
