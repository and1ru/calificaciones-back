import { prisma } from "../../../lib/prisma"

export const LoginRepository = async (email:string) => {
    return await prisma.users.findUnique({where:{user_email:email}})
}