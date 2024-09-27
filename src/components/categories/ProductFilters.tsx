import { ProductQuerySchema, ProductQuerySchemaType } from "@/lib/schema";
import { Separator } from "../ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { category, price, rating } from "@/types";
import useSetQueryParams from "@/hooks/useSetQueryParams";
import { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ProductFilters({
  searchParams,
}: {
  searchParams: ProductQuerySchemaType;
}) {
  const form = useForm<ProductQuerySchemaType>({
    resolver: zodResolver(ProductQuerySchema),
    defaultValues: {
      category: searchParams.category,
      rating: searchParams.rating,
      pricerange: searchParams.pricerange,
    },
  });

  const formValues = form.watch(); 
  const setQueryParams = useSetQueryParams();

  useEffect(() => {
    if (formValues) {
      setQueryParams(formValues);
      // console.log(formValues)
    }
  }, [formValues, setQueryParams, searchParams]);

  return (
    <div className="rounded-lg  bg-black mr-5  min-w-[290px]  p-6 h-fit  top-20">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-base text-primary-text">All Filters</h3>
      </div>

      <Separator className="my-6" />
      <Form {...form}>
        <form className=" flex flex-col gap-3">
        <ScrollArea className='h-fit pr-4' >
          <Accordion
            type="multiple"
            defaultValue={["category", "rating", "pricerange"]}
            className="w-full"
          >
            <AccordionItem value="category">
              <AccordionTrigger className="text-primary-text pt-0 hover:no-underline">
                Category
              </AccordionTrigger>
              <AccordionContent>
                <FormField
                  control={form.control}
                  name="category"
                  render={() => (
                    <FormItem>
                      {category.categories.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="category"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex items-center space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.value)}
                                    onCheckedChange={(checked) => {
                                      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                      checked
                                        ? field.onChange([
                                            ...(field.value || []),
                                            item.value,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.value
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="rating">
              <AccordionTrigger className="text-primary-text hover:no-underline">
                Rating
              </AccordionTrigger>
              <AccordionContent>
                <FormField
                  control={form.control}
                  name="rating"
                  render={() => (
                    <FormItem>
                      {rating.ratingRange.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="rating"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex items-center space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.value)}
                                    onCheckedChange={(checked) => {
                                      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                      checked
                                        ? field.onChange([
                                            ...(field.value || []),
                                            item.value,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.value
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="pricerange">
              <AccordionTrigger className="text-primary-text hover:no-underline">
                Price range
              </AccordionTrigger>
              <AccordionContent>
                <FormField
                  control={form.control}
                  name="pricerange"
                  render={() => (
                    <FormItem className="flex flex-wrap gap-2 space-y-0">
                      {price.priceRange.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="pricerange"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex items-center space-y-0 group"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.value)}
                                    onCheckedChange={(checked) => {
                                      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                      checked
                                        ? field.onChange([
                                            ...(field.value || []),
                                            item.value,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.value
                                            )
                                          );
                                    }}
                                    hidden
                                  />
                                </FormControl>
                                <FormLabel className="text-primary-text font-normal text-xs cursor-pointer group-aria-checked:bg-primary group-aria-checked:text-primary-foreground flex items-center justify-start py-2 px-4 rounded-full border">
                                  {item.value}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </ScrollArea>
        </form>
      </Form>
    </div>
  );
}
