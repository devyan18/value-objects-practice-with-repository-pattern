export class UserPassword {
  constructor (private password: string) {
    if (!password || password.trim().length === 0) {
      throw new Error('User password is required')
    }
  }

  get value () {
    return this.password
  }
}
