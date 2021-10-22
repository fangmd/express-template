import { Schema, model, Document } from 'mongoose'

interface User extends Document {
  /**账号 */
  account: string
  /**密码 */
  pwd: string
  /**姓名 */
  name: string
}

const schema = new Schema<User>({
  account: { type: String, required: true },
  pwd: { type: String, required: true },
  name: { type: String, required: false },
})

const UserModel = model<User>('User', schema)

export default UserModel
