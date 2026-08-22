import type { NextFunction, Response, Request } from "express";
import { loginSchema } from "./login.schema";
import type { LoginService } from "./login.service";

export class LoginController {
    constructor(private service:LoginService){}
    login = async (req:Request,res:Response,next:NextFunction) => {
        const data = loginSchema.safeParse(req.body)
        if(!data.success){
            return next(data.error)
        }
        try {
            const { email, password } = data.data
            const {token} = await this.service.login(email, password)

            res.cookie("token", token, {
                maxAge: 1000 * 60 * 60,
            })

            return res.status(200).json({message:"login", success:true})
        } catch (error) {
            return next(error)
        }
    }
}