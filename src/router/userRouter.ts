import express from 'express'
import { UserController } from '../controller/UserController'
import { HttpResult } from '../response'
import { paramsGetValidate, paramsPostValidate } from '../validators/testValidator'
const router = express.Router()

router.post('/user', UserController.create)

export default router
