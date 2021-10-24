import { BizError } from './../utils/errors'
import UserModel from '../mongo/model/UserModel'
import { responses } from '../response'
import User from '../mongo/model/UserModel'
import { getMongoRepository, getRepository, MongoRepository, Repository } from 'typeorm'

/**
 * 用户 Service
 */
export default class UserService {
  private static repository(): Repository<User> {
    return getRepository(User)
  }

  static async add({ name, account }) {
    const dbUser = await this.repository().findOne({ name: name })
    if (dbUser) {
      throw new BizError(responses.userExist)
    }

    const user = new UserModel()
    user.name = name
    user.pwd = 'bill@initech.com'
    user.account = account
    return await this.repository().save(user)
  }

  static async addMysql({ name, account }) {
    // const dbUser = await UserModel.findOne({ name: name })
    // if (dbUser) {
    //   throw new BizError(responses.userExist)
    // }
    // const user = new UserModel({
    //   name: name,
    //   pwd: 'bill@initech.com',
    //   account: account,
    // })
    // await user.save()
    // return user
  }
}
