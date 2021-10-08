import { IResponse } from './../response'

export const BizErrorName = 'BizError'
export const ParamsErrorName = 'ParamsError'

/**
 * 业务错误
 */
export class BizError extends Error {
  constructor(errorInfo: IResponse) {
    super(JSON.stringify(errorInfo))
    this.name = BizErrorName
  }
}

/**
 * 参数错误
 */
export class ParamsError extends Error {
  constructor(msg: string) {
    super(msg)
    this.name = ParamsErrorName
  }
}
