import dotenv from 'dotenv'
// initialize configuration
dotenv.config()

import { dbInit } from './db/mysql'
import express, { Request, Response } from 'express'
import { HttpResult } from './response'
import 'express-async-errors'
import { globalError } from './middleware/globalError'
import { loggerMiddleware } from './middleware/logger'
import { corsWrap } from './middleware/cors'
import { configRouter } from './router'
import ytLogger from './utils/yt-logger'

console.log(process.env.NODE_ENV)

const app = express()
const port = process.env.SERVER_PORT

app.use(loggerMiddleware)
app.use(corsWrap)
app.use(express.json())

ytLogger.info('1212')
ytLogger.warn('warn 1212')
ytLogger.debug('debug 1312')

app.get('/', (req: Request, res: Response) => {
  res.send(HttpResult.success())
})

/**
 * 前端日志收集
 * POST, 内容是 json
 */
app.post('/log', (req: Request, res: Response) => {
  ytLogger.info(req.body)
  res.send(HttpResult.success())
})

configRouter(app)

app.use(globalError)

if (process.env.NODE_ENV !== 'uniTest') {
  // dbInit().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  // })
}

export default app
