import { comparePassword } from "../../helper/comparePassword"
import { CustomError } from "../../helper/cutomError"
import { generateToken } from "../../helper/generateToken"
import { hashPassword } from "../../helper/hashPassword"
import { LoginRepository } from "./login.repository"

export class LoginService {
    login = async (email:string, password:string) => {
        const user = await LoginRepository(email)
        // verify if exist an user with the email
        if(!user){
            throw new CustomError(404, "credential error")
        }

        // verify if passwords mached
        const verifyPassword = await comparePassword(password, user.user_password)
        if(!verifyPassword){
            throw new CustomError(400, "credential error")
        }

        // generate a token
        const token = generateToken({id:user.user_id, rol:user.user_role})
        // return token
        return {token}
    }
}