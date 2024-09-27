

import { z } from "zod";

export const ProductQuerySchema = z.object({
  category : z
    .union([z.string(), z.array(z.string())])
    .optional()
    .transform((val) => {
      if (typeof val === "string") {
        return val.split(",");
      }
      return val;
    }),
  rating : z
    .union([z.string(), z.array(z.string())])
    .optional()
    .transform((val) => {
      if (typeof val === "string") {
        return val.split(",");
      }
      return val;
    }),
  search: z.string().optional(),
  pricerange: z
    .union([z.string(), z.array(z.string())])
    .optional()
    .transform((val) => {
      if (typeof val === "string") {
        return val.split(",");
      }
      return val;
    }),
    sortby : z.enum(['postedat_asc', 'postedat_desc']).default('postedat_desc'),
    page : z.coerce
    .number({message : "Page must be a number"})
    .optional()
    .default(1),
    isFeatured : z.boolean().optional(),
    limit : z.number().optional()
});

export type ProductQuerySchemaType = z.infer<typeof ProductQuerySchema>
