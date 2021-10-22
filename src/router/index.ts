import { Express } from 'express'
import testRouter from './testRouter'
import userRouter from './userRouter'

/**
 * 路由配置
 * 路由模块化
 */
export const configRouter = (app: Express) => {
  const rules = {
    '/test': testRouter,
    '/': userRouter,
  }

  Object.keys(rules).forEach((key) => {
    app.use(key, rules[key])
  })
}
