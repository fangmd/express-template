import { PARAMS_ERROR } from './../response/responses'
import { ParamsErrorName } from './../utils/errors'
import { Request, Response } from 'express'
import { HttpResult } from '../response'
import { BizErrorName } from '../utils/errors'
import { isDEV } from '../utils/env'

/**
 * 全局错误处理
 * 中间件放在最后
 */
export const globalError = function (err, req: Request, res: Response, next) {
  if (isDEV) console.log('globalError', err)

  if (err.name === BizErrorName) {
    // 业务错误
    res.send(err.message)
  } else if (err.name === ParamsErrorName) {
    res.send(HttpResult.error({ code: PARAMS_ERROR, msg: err.message }))
  } else {
    res.status(500).send(HttpResult.error())
  }

  next()
}
