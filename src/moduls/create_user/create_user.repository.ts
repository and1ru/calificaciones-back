import { prisma } from "../../../lib/prisma"

type Role = "student" | "teacher"

export const createUser = async (schoolId:number, email:string, name:string, password:string, role:Role) => {
    await prisma.users.create({data: {school_id:schoolId, user_email:email, user_name:name, user_password: password, user_role:role}})
}

export const findUser = async (email:string) => {
    return await prisma.users.findUnique({where:{user_email:email}})
}