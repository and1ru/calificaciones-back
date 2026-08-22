import type { NextFunction, Response, Request } from "express";
import { userSchema } from "./create_user.schema";
import type { CreateUserService } from "./create_user.service";

export class CreateUserController {
    constructor(private service:CreateUserService){}
    createUser = async (req:Request, res:Response, next:NextFunction) => {
        const data = userSchema.safeParse(req.body)
        const shcoolId = req.user?.schoolId
        if(!shcoolId){
            return res.status(401).json({message:"no authenticated", success:false})
        }

        if(!data.success){
            return next(data.error)
        }

        try {
            const { email, name, password, role } = data.data
            await this.service.createUser(shcoolId, email, name, password, role)
            return res.status(201).json({message:"user created", success:true})
        } catch (error) {
            return next(error)
        }
    }
}