import { CustomError } from "../../helper/cutomError"
import { hashPassword } from "../../helper/hashPassword"
import { createSchool, createUser, findUser } from "./create_school.repository"

export class CreateSchoolService{
    createSchool = async (schoolName:string,schoolAddress:string, schoolCity:string, adminName:string, email:string, password:string) => {
        // verify is exist an user with the same email
        const user = await findUser(email)
        if(user){
            throw new CustomError(400, "exist user")
        }
        // create school
        const school = await createSchool(schoolName, schoolAddress, schoolCity)
        // hash password
        const passwordHashed = await hashPassword(password)
        // create user
        await createUser(school.school_id,email,adminName,passwordHashed)
    }
}