import { ProductQuerySchemaType } from "@/lib/schema";
import { Prisma } from "@prisma/client";

// Function to construct the price query from the given price ranges
function priceQueryFunction(pricerange: ProductQuerySchemaType["pricerange"]) {
  return pricerange?.map((eachItem: string) => {
    const [from, till] = eachItem.split("-");
    return {
      AND: [
        {
          price: {
            gte: Number(from), // Minimum price
          },
        },
        // Include the maximum price only if it is defined
        ...(till ? [{ price: { lte: Number(till) } }] : []),
      ],
    };
  });
}

// Main function to construct product filters
export function getProductFilters(result: ProductQuerySchemaType) {
  const { category, rating, sortby, page, pricerange, search } = result;

  const filters = [
    category && { category: { in: category } },
    rating && { rating: { in: rating } },
    pricerange && { OR: priceQueryFunction(pricerange) },
    search && {
      title: { // Searching only by title
        contains: search,
        mode: 'insensitive',
      },
    },
  ];

  // Construct the filter queries, ensuring they are valid
  const filterQueries: Prisma.ProductWhereInput = {
    AND: filters.filter(
      (filter) => filter !== undefined && filter !== null && filter !== ''
    ) as Prisma.ProductWhereInput[],
  };

  return filterQueries; // Return the constructed filter queries
}
