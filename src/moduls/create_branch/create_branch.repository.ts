import { prisma } from "../../../lib/prisma"

export const createBranch = async (schoolId:number, branchName:string, branchAddress:string) => {
    return await prisma.branches.create({data:{school_id:schoolId, branch_name:branchName, branch_address:branchAddress}})
}