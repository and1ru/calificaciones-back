import { createBranch } from "./create_branch.repository"

export class CreateBranchService {
    createBranch = async (schoolId:number, branchName:string, branchAddress:string) => {
        await createBranch(schoolId, branchName, branchAddress)
    }
}