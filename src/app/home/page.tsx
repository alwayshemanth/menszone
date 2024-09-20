import BestOfCard from "@/components/cards/BestOfCard";
import ViewAllCard from "@/components/cards/ViewAllCard";
import CategoryBar from "@/components/landing-page/CategoriesBar";

export default function Home() {
    return (
      <div className="bg-slate-100">
        <CategoryBar />
        <div className="flex flex-row justify-evenly">
          <ViewAllCard />
          <ViewAllCard />
        </div>
        <BestOfCard />
       
      </div>
    );
  }
  