import { BizError } from './../utils/errors'
import { HttpResult, responses } from '../response'
import { Request } from 'express'
import { ExampleService } from '../service/example-service'
import UserService from '../service/UserService'

export class UserController {
  static getParams(req, res) {
    res.send(HttpResult.success())
  }

  static async create(req: Request, res) {
    await UserService.add()
    res.send(HttpResult.success())
  }
}
