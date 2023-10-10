import { Request, Response } from 'express'
import { Controller } from '../common/common.controller'
import { User } from './user'
import { UserService } from './user.service'
import { UserId } from './vao/user-id-vao'

export class UserController implements Controller {
  constructor (private readonly userService: UserService) {}

  async create (req: Request, res: Response) {
    const { id, nickName, password } = req.body

    if (!id || id.trim().length === 0) throw new Error('User id is required')
    if (!nickName || nickName.trim().length === 0) throw new Error('User nickname is required')
    if (!password || password.trim().length === 0) throw new Error('User password is required')

    const user = new User(id.toString(), nickName.toString(), password.toString())
    const newUser = await this.userService.create(user)

    return res.status(201).json(newUser)
  }

  async list (req: Request, res: Response) {
    const { limit, offset } = req.query

    let limitNumber = Number(limit)
    let offsetNumber = Number(offset)

    if (isNaN(limitNumber) || isNaN(offsetNumber)) {
      limitNumber = 0
      offsetNumber = 0
    }

    const users = await this.userService.list(limitNumber, offsetNumber)

    res.status(200).json(users)
  }

  async find (req: Request, res: Response) {
    const { id } = req.params
    console.log(id)
    if (!id || id.trim().length === 0) throw new Error('User id is required')

    const userId = new UserId(id.toString())
    const user = await this.userService.find(userId)

    if (!user) return res.status(404).json({ message: 'User not found' })

    return res.status(200).json(user)
  }
}
