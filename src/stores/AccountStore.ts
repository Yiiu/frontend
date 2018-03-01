import { observable, computed } from 'mobx'

export class AccountStore {
  @observable
  info: object

  @computed
  get isSignIn () {
    return !!this.info
  }
}
