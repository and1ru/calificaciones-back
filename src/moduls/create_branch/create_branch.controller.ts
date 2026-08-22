import type { NextFunction, Request, Response } from "express";
import type { CreateBranchService } from "./create_branch.service";
import { branchSchema } from "./create_branch.schema";

export class CreateBranchController{
    constructor(private service:CreateBranchService){}
    createBranch = async (req:Request, res:Response, next:NextFunction) => {
        const data = branchSchema.safeParse(req.body)
        const schoolId = req.user?.schoolId
        if(!schoolId){
            return res.status(401).json({message:"no autheticated", success:false})
        }
        
        if(!data.success){
            return next(data.error)
        }

        try {
            const { branchAddress, branchName } = data.data
            await this.service.createBranch(schoolId, branchName, branchAddress)

            return res.status(201).json({message:"branch created", success:true})
        } catch (error) {
            console.error(error)
            return next(error)
        }
    }
}