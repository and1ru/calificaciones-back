import { Router } from 'express'
import login from './moduls/login/login.route'
import auth from './moduls/auth/auth.route'

const routes = Router()

routes.use(login)
routes.use(auth)

export default routes