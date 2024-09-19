"use server";

import { prisma } from "@/db/prisma";
import { formSchema } from "@/schema/zodSchema";
import { SignupType } from "@/types";
import bcrypt from "bcrypt";

export async function SignUpAction({ email, password }: SignupType) {
  const validateSchema = formSchema.safeParse({ email, password });

  if (!validateSchema.success) {
    throw new Error("Double check the input");
  }

  const isDuplicateUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (isDuplicateUser) {
    throw new Error("User already exists with this username.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const registerUserQuery = await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword,
    },
  });

  // console.log(registerUserQuery)
  return registerUserQuery;
}
