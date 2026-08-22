import { Router } from "express";
import { AuthController } from "./auth.controller";
import { authToken } from "../../middleware/authToken";

const controller = new AuthController()
const route = Router()

route.get("/auth", authToken, controller.auth)

export default route