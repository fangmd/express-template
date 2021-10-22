import { Express } from 'express'
import testRouter from './testRouter'
import userRouter from './userRouter'

export const configRouter = (app: Express) => {
  const rules = {
    '/test': testRouter,
    '/': userRouter,
  }

  Object.keys(rules).forEach((key) => {
    app.use(key, rules[key])
  })
}
