"use client"
 
import { z } from "zod"
 
export const formSchema = z.object({
  username: z.string().min(2,{message: "Please enter the username"}).max(50),
  password:z.string().min(6,{message: "Password must be atleast 6 characters"}).max(15)
})