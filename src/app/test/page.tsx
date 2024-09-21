"use client"

import CardCard from "@/components/cards/CartCard";

import { useSession } from "next-auth/react";

export default function Test() {

    const {data:session, status} = useSession()
    // console.log(status)
    // console.log(session)
    // console.log(session)
    return (
        <CardCard />
    )
}

// {
//   user: { email: 'user1@gmail.com' },
//   expires: '2024-10-21T14:48:49.309Z'
// }