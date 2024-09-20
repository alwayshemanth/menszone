import { prisma } from "@/db/prisma";
import Image from "next/image";
import Link from "next/link";

async function allCategories() {
  const getAllCategories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      imageUrl: true,
    },
  });

  // console.log(getAllCategories);
  return getAllCategories;
}

// [
//     { name: 'Clothing' },
//     { name: 'Accessories' },
//     { name: 'Grooming' },

export default async function CategoryBar() {
  const categories = await allCategories();

  return (
    <div className="flex  justify-center gap-8 p-8 max-w-5xl mx-auto ">
      {categories.map(function (eachItem) {
       
        return (
          <Link
            key={eachItem.id}
            href={`home/${eachItem.name.toLowerCase()}`}
            className="flex items-center space-x-4 w-80 h-20 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform hover:bg-blue-50"
          >
            {eachItem.imageUrl && (
              <Image
                src={eachItem.imageUrl}
                alt={eachItem.name}
                width={50}
                height={50}
                className="rounded-full"
              />
            )}
            <span className="text-left font-semibold text-gray-700">
              {eachItem.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
