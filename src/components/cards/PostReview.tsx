"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import PostReviewAction from "@/actions/PostReviewAction";
import { Input } from "../ui/input";

interface emailType {
    email : string | null | undefined , 
    productId : number | undefined
}

export default function PostReview({email , productId} : emailType ) {
    // console.log(email)
  // console.log("Heloo")
  const [review, setReview] = useState<string>("");
  
  
  function handler(event) {
    setReview(event.target.value);
  }

  async function postHandler(event) {
    await PostReviewAction(email, productId , review);
    // console.log(email)
    // console.log(productId)
    // console.log(review)
    setReview("");
  }

  return (
    <div className="pl-7 flex flex-row items-start space-x-4 bg-gray-50 dark:bg-gray-900 p-5 rounded-lg shadow-sm">
      <Textarea
        value={review}
        onChange={handler}
        placeholder="write your opinion.. "
        className="border-none resize-none p-2 w-72 h-24 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-600 dark:focus:ring-white transition duration-200"
      />
      
      <div className="flex items-center">
        <Button
          onClick={postHandler}
          className="mt-14 bg-gray-800 hover:bg-slate-400 text-white font-semibold py-2 px-4 rounded-md transition duration-200 dark dark:text-white focus:outline-none focus:ring-2"
        >
          Post the review
        </Button>
      </div>
    </div>
  );
}
