import { HttpResult } from '../response'
import { Request } from 'express'
import { ExampleService } from '../service/example-service'

export class TestController {
  static getParams(req, res) {
    res.send(HttpResult.success())
  }

  static postParams(req: Request, res) {
    ExampleService.addHomeCnt(req)
    res.send(HttpResult.success())
  }
}
