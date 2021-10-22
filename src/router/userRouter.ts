import express from 'express'
import { UserController } from '../controller/UserController'
import { HttpResult } from '../response'
import { userPostValidate } from '../validators/userValidator'
const router = express.Router()

router.post('/user', userPostValidate, UserController.create)

export default router
