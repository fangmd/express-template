import 'express'
import Logger from 'bunyan'

declare global {
  namespace Express {
    interface Request {
      req_id: string
      visitLogger: Logger
      bizLogger: Logger
      miniLogger: Logger
    }
  }
}
