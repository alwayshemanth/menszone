
import Link from "next/link";

import { CiShoppingCart } from "react-icons/ci";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 h-16 bg-gray-700 text-white sticky top-0 z-50">
      {/* Logo Section */}
      <div className="">
        <h1 className="font-bold"> Mens Zone </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        <Link href="/home" className="text-lg hover:text-gray-400">
          Home
        </Link>
        <Link href="/home/products" className="text-lg hover:text-gray-400">
          All Products
        </Link>

      

        <Link href="/about" className="text-lg hover:text-gray-400">
          About Us
        </Link>

        <Link href="/cart">
          <CiShoppingCart className="h-8 w-8" />
        </Link>
      </div>
    </nav>
  );
}
