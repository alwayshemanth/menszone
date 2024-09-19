import { products } from "@/sample";
import ProductCard from "./ProductCard";
import TopBar from "../landing-page/TopBar";

export default function AllProducts() {
  return (

    <div className="bg-gray-50 p-20 w-full">
        <TopBar />
        <div className="grid grid-cols-3 gap-16 mt-10">
        
        {products.map((eachProduct) => (
          <ProductCard key={eachProduct.id} productDetails={eachProduct} />
        ))}
      </div>

    </div>
    
  );
}
