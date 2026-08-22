import type { NextFunction, Request, Response } from "express"
export class AuthController {
    auth = (req:Request, res:Response, next:NextFunction) => {
        const role = req.user?.role
        try {
            return res.status(200).json({message:"authenticated", success:true, role})
        } catch (error) {
            next(error)
        }
    }
}