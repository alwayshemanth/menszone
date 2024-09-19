import Image from "next/image";

interface ProductType {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  productDetails: ProductType;
}

export default function ProductCard({ productDetails }: ProductCardProps) {
  return (
    <div className=" flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      
      <div className="relative overflow-hidden rounded-lg group">
        <Image
          src={productDetails.imageUrl}
          alt={productDetails.name}
          width={300}
          height={300}
          className="transition-transform duration-300 transform group-hover:scale-105"
        />
      </div>

      <div className="mt-4 flex flex-col justify-center items-center">
        <h2 className="text-lg font-semibold">{productDetails.name}</h2>
        <p className="text-gray-600">{productDetails.description}</p>
        <span className="text-lg font-bold">
          £{productDetails.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
