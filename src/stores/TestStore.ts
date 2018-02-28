import { observable, action } from 'mobx'

export class TestStore {
  constructor (array: string[]) {
    this.todos = array
  }
  @observable
  public todos: string[]

  @observable
  start = Date.now()

  @action
  addTodo = (str: string): void => {
    this.todos.push(str)
  }
}
