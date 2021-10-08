import { responses } from "./responses"
import { IResponse } from "./interface"

export * from "./responses"
export * from "./interface"

/**
 * 返回结果处理类
 */
export class HttpResult {
  static error(resp?: IResponse): IResponse {
    if (resp) {
      return resp
    }
    return responses.serverError
  }

  static success(msg?: string): IResponse {
    if (msg) {
      return { ...responses.success, ...{ msg: msg } }
    }
    return responses.success
  }
}
