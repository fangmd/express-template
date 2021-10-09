import { Express } from 'express'
import testRouter from './testRouter'

export const configRouter = (app: Express) => {
  const rules = {
    '/test': testRouter,
  }

  Object.keys(rules).forEach((key) => {
    app.use(key, rules[key])
  })
}
