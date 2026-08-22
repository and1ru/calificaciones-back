import { prisma } from "../../../lib/prisma"

export const findUser = async (email:string) => {
    return await prisma.users.findUnique({where:{user_email:email}})
}

export const createSchool = async (schoolName:string, schoolAddress:string, schoolCity:string ) => {
    return await prisma.schools.create({data:{school_name:schoolName, school_address:schoolAddress, school_city:schoolCity }})
}

export const createUser = async (schoolId:number, email:string, name:string, password:string,) => {
    return await prisma.users.create({data:{school_id:schoolId, user_email:email, user_name:name, user_password:password, user_role:"admin"}})
}