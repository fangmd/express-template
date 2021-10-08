import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import { HttpResult } from './response'
import 'express-async-errors'
import { globalError } from './middleware/globalError'
import { logger } from './middleware/logger'
import { corsWrap } from './middleware/cors'
import { configRouter } from './router'

// initialize configuration
dotenv.config()

console.log(process.env.NODE_ENV)

const app = express()
const port = process.env.SERVER_PORT

app.use(corsWrap)
app.use(express.json())
app.use(logger)

app.get('/', (req: Request, res: Response) => {
  // console.log(req);
  console.log(req.body)
  console.log(req.params)
  res.send(HttpResult.success())
})

configRouter(app)

app.use(globalError)

if (process.env.NODE_ENV !== 'uniTest') {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

export default app
