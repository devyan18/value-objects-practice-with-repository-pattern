export class UserId {
  constructor (private id: string) {
    if (!id || id.trim().length === 0) {
      throw new Error('User id is required')
    }
  }

  get value () {
    return this.id
  }
}
