import { BizError } from './../utils/errors'
import UserModel from '../model/UserModel'
import { responses } from '../response'

export default class UserService {
  static async add() {
    const dbUser = await UserModel.findOne({ name: 'Bill' })
    if (dbUser) {
      throw new BizError(responses.userExist)
    }

    const user = new UserModel({
      name: 'Bill',
      pwd: 'bill@initech.com',
      account: 'https://i.imgur.com/dM7Thhn.png',
    })
    await user.save()
    return user
  }
}
