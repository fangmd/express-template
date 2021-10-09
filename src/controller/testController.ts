import { HttpResult } from '../response'

export class TestController {
  static getParams(req, res) {
    res.send(HttpResult.success())
  }

  static postParams(req, res) {
    res.send(HttpResult.success())
  }
}
