import { model, Schema } from 'mongoose'
import { UserId } from './vao/user-id-vao'
import { UserNickname } from './vao/user-nickname-vao'
import { UserPassword } from './vao/user-password-vao'

export class User {
  public readonly id: UserId
  public readonly nickName: UserNickname
  public readonly password: UserPassword
  constructor (
    id: string,
    nickName: string,
    password: string
  ) {
    this.id = new UserId(id)
    this.nickName = new UserNickname(nickName)
    this.password = new UserPassword(password)
  }

  toJSON () {
    return {
      id: this.id.value,
      nickName: this.nickName.value,
      password: this.password.value
    }
  }
}

const UserSchema = new Schema<User>({
  id: {
    type: String,
    required: true
  },
  nickName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

export const UserModel = model('User', UserSchema)
