import NavBar from "@/components/landing-page/NavBar"
import React from "react"

export default function MainLayout({children} : {
    children : React.ReactNode
}) {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}