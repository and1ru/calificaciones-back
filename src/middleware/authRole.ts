import type { NextFunction, Request, Response } from "express"
import { CustomError } from "../helper/cutomError"

export const authRole = (...role:string[]) => {
    return (req: Request, _res: Response, next:NextFunction) => {
        const user = req.user
        if(!user){
            throw new CustomError(400, "no have been authenticated")
        }

        const verify = role.includes(user.role)

        if(!verify){
            throw new CustomError(401, "no authorizated")
        }

        next()
    }
}