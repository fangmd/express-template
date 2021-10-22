import { Request, Response } from 'express'
import morgan from 'morgan'
import onFinished from 'on-finished'
import { v4 as uuid } from 'uuid'
import ytLogger from '../utils/yt-logger'

/**
 * 日志处理
 */
// export const logger = morgan('tiny')

/**
 * 日志中间件
 */
export const loggerMiddleware = (req: Request, res: Response, next) => {
  req.req_id = uuid()
  req.visitLogger = ytLogger.child({ req_id: req.req_id, uid: '', scope: 'visit' }) // TODO: 添加 uid
  req.bizLogger = ytLogger.child({ req_id: req.req_id, uid: '', scope: 'biz' }) // TODO: 添加 uid
  //   req.loggerSql = req.logger.child({ type: 'sql' })
  //   req.logging = logging(req.loggerSql, 'info')

  onFinished(res, () => {
    const remoteAddr = morgan['remote-addr'](req, res)
    const method = morgan['method'](req, res)
    const url = morgan['url'](req, res)
    // const httpVersion = morgan['http-version'](req, res)
    const status = morgan['status'](req, res)

    req.visitLogger.info({
      event: 'trace',
      remoteAddr,
      method,
      url,
      status,
    })
  })

  next()
}
