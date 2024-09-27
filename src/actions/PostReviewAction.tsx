"use server"

import { prisma } from "@/db/prisma";


export default async function PostReviewAction() {


    const addNewTweet = await prisma.posts.create({
        data : {
            tweetContent : tweet,
            userId : id
        }
    })
    
    return addNewTweet;
}