
import ProductCard from "./ProductCard";
import TopBar from "../landing-page/TopBar";
import { prisma } from "@/db/prisma";
import SearchComponent from "../landing-page/SearchComponent";
import FilterComponent from "../landing-page/FilterComponent";

export default async function AllProducts() {
  const category = "All Products";
  const products = await prisma.product.findMany({
    select : {
      id : true,
      name : true,
      description : true,
      price : true,
      imageUrl : true
    }
  })

  return (

    <div className="bg-gray-50 p-20 w-full">
        <TopBar categoryName={category}/>

        <div className="flex flex-col gap-5 px-5 mt-5">
          <SearchComponent />
          <FilterComponent />
        </div>
        <div className="grid grid-cols-3 gap-16 mt-10">
        
        {products.map((eachProduct) => (
          <ProductCard key={eachProduct.id} productDetails={eachProduct} />
        ))}
      </div>

    </div>
    
  );
}
