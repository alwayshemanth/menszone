
import CategoryProducts from "@/components/categories/CategoryProducts";
import TopBar from "@/components/landing-page/TopBar";

import { getCategory } from "@/utlity";

export default async function Grooming() {
    const category = "Grooming";

    const categoryId = await getCategory(category)
    return (
        // <div className="flex flex-row h-full bg-slate-400 pl-40 pr-40">
        //     <div className="w-1/4">
        //         <FilterCard />
        //     </div>
        //     <div className="w-3/4 overflow-y-auto h-full">
        //         <CategoryProducts />
        //     </div>
        // </div>

        <div className="bg-gray-50 p-20 w-full">
            <TopBar categoryName={category}/>
            <CategoryProducts categoryId = {categoryId}/>
        </div>
    );
}
