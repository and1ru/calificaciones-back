import { Router } from "express";
import { CreateUserController } from "./create_user.controller";
import { CreateUserService } from "./create_user.service";
import { authToken } from "../../middleware/authToken";
import { authRole } from "../../middleware/authRole";

const service = new CreateUserService()
const controller = new CreateUserController(service)
const route = Router()

route.post("/user", authToken, authRole("admin"), controller.createUser)

export default route