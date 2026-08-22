import { CustomError } from "../../helper/cutomError"
import { hashPassword } from "../../helper/hashPassword"
import { createUser, findUser } from "./create_user.repository"

type Role = "student" | "teacher"

export class CreateUserService {
    createUser = async (schoolId:number, email:string, name:string, password:string, role:Role) => {
        // verify is the email exist
        const user = await findUser(email)
        if(user){
            throw new CustomError(401, "email exist")
        }
        // hash password
        const hashedPassword = await hashPassword(password)
        await createUser(schoolId, email, name, hashedPassword, role)
    }
}