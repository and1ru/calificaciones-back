import { Router } from "express";
import { CreateSchoolService } from "./create_school.service";
import { CreateSchoolController } from "./create_school.controller";
import { authToken } from "../../middleware/authToken";
import { authRole } from "../../middleware/authRole";

const service = new CreateSchoolService()
const controller = new CreateSchoolController(service)
const route = Router()

route.post("/school", authToken, authRole("root"), controller.createSchool)

export default route