import { body, query } from 'express-validator'
import { paramsValidate } from '../middleware/paramsValidate'

export const userPostValidate = [
  body('name').isString(),
  body('account').isString(),
  paramsValidate,
]
