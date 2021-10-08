export const SUCCESS = 200
export const SERVER_ERROR = -1
export const USER_NOT_LOGIN = -2
export const PARAMS_ERROR = -3

export const responses = {
  serverError: {
    code: SERVER_ERROR,
    msg: 'server error',
  },
  success: {
    code: SUCCESS,
    msg: 'success',
  },
  userNotLogin: {
    code: USER_NOT_LOGIN,
    msg: 'user not login',
  },
  paramsError: {
    code: PARAMS_ERROR,
    msg: '参数错误',
  },
}
