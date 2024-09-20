import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CiShoppingCart } from "react-icons/ci";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 mt-2 h-12">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <Image
          src="https://shorturl.at/D67DF"
          alt="menszone"
          width={120}
          height={120}
          className="object-contain"
        />
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
