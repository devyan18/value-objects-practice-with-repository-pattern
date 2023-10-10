export class UserNickname {
  constructor (private nickname: string) {
    if (!nickname || nickname.trim().length === 0) {
      throw new Error('User nickname is required')
    }
  }

  get value () {
    return this.nickname
  }
}
