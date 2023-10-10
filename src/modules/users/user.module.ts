import { Router } from 'express'

import { UserService } from './user.service'
import { UserController } from './user.controller'
import { ModuleFactory } from '../common/common.module'

const userPrefix = 'users'
const userRouter = Router()
const userController = new UserController(new UserService())

export const UserModule = ModuleFactory(
  userRouter,
  userPrefix,
  userController
)
