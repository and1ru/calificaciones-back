import { Router } from 'express'
import login from './moduls/login/login.route'
import auth from './moduls/auth/auth.route'
import school from './moduls/create_school/create_school.route'
import branch from './moduls/create_branch/create_branch.route'
import user from './moduls/create_user/create_user.route'

const routes = Router()

routes.use(login)
routes.use(auth)
routes.use(school)
routes.use(branch)
routes.use(user)

export default routes