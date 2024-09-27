
"use client"


import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import PostReviewAction from "@/actions/PostReviewAction"


export default function PostReview() {   
    // console.log("Heloo") 
    const [tweet, setTweet] = useState("")
    const router = useRouter()
    
    const {data : session , status} = useSession()
    const userId = session?.user?.id 

    console.log(userId)
    
    function handler(event) {
        // console.log(event.target.value)
        setTweet(event.target.value)
    }

    async function postHandler(event) {
        // console.log("Hi")
        await PostReviewAction()
        // console.log("Done")
        setTweet("")
        // console.log("Done")

    }

    return (
        <div className="pl-7 flex flex-row items-start space-x-4 bg-gray-50 dark:bg-gray-900 p-5 rounded-lg shadow-sm">
            <Textarea
                value={tweet}
                onChange={handler}
                placeholder="What's happening?"
                className="border-none resize-none p-2 w-72 h-24 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-600 dark:focus:ring-white transition duration-200"
            />
            <div className="flex items-center">
                <Button
                onClick={postHandler}
                className="mt-14 bg-gray-800 hover:bg-slate-400 text-white font-semibold py-2 px-4 rounded-md transition duration-200 dark dark:text-white focus:outline-none focus:ring-2"
                >
                Tweet
                </Button>
            </div>
        </div>

    )
}