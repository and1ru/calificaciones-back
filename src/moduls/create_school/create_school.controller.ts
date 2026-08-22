import type { NextFunction, Request, Response } from "express"
import { schoolSchema } from "./create_school.schema"
import type { CreateSchoolService } from "./create_school.service"

export class CreateSchoolController {
    constructor(private serive:CreateSchoolService){}
    createSchool = async (req:Request, res:Response, next:NextFunction) => {
        const data = schoolSchema.safeParse(req.body)
        if(!data.success){
            return next(data.error)
        }
        try {
            const { schoolName, schoolAddress, schoolCity, adminName, email, password } = data.data
            await this.serive.createSchool(schoolName,schoolAddress, schoolCity, adminName, email, password)
            return res.status(201).json({message:"user and school have been created", success:true,})
        } catch (error) {
            return next(error)
        }
    }
}