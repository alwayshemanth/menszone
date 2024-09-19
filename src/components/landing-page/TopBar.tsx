import { Input } from "../ui/input"; // Assuming you have a custom Input component
import { CiSearch } from "react-icons/ci";

export default function TopBar() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-3 font-bold">All Products</h1>
      <div className="relative">
        <Input className="w-72 pl-10" placeholder="Search the product.." />
        <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  );
}
