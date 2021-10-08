import { body, query } from 'express-validator'
import { paramsValidate } from '../middleware/paramsValidate'

export const paramsGetValidate = [query('username').isString(), paramsValidate]

export const paramsPostValidate = [body('username').isString(), paramsValidate]
