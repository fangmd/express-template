import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { ParamsError } from '../utils/errors'

/**
 * 参数校验中间件
 */
export const paramsValidate = (req: Request, res: Response, next) => {
  const err = validationResult(req)
  if (!err.isEmpty()) {
    throw new ParamsError(JSON.stringify({ errors: err.array() }))
  }
  next()
}
