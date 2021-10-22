import { BizError } from './../utils/errors'
import UserModel from '../model/UserModel'
import { responses } from '../response'

/**
 * 用户 Service
 */
export default class UserService {
  static async add({ name, account }) {
    const dbUser = await UserModel.findOne({ name: name })
    if (dbUser) {
      throw new BizError(responses.userExist)
    }

    const user = new UserModel({
      name: name,
      pwd: 'bill@initech.com',
      account: account,
    })
    await user.save()
    return user
  }
}
