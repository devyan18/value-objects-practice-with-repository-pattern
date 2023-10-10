import { User, UserModel } from './user'
import { UserId } from './vao/user-id-vao'

export class UserService {
  async create (user: User) {
    try {
      console.log('llegué acá')
      return await UserModel.create(user.toJSON())
    } catch (error) {
      throw new Error("Can't create user")
    }
  }

  async list (limit: number = 10, offset: number = 0) {
    return await UserModel.find().skip(offset).limit(limit)
  }

  async find (id: UserId) {
    return await UserModel.findById(id.value)
  }
}
