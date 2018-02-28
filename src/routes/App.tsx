import * as React from 'react'
import { inject, observer } from 'mobx-react';

import { TestStore } from '../stores';
import { STORE_ROUTER, STORT_TEST } from '../constants/stores'

@inject(STORE_ROUTER, STORT_TEST)
@observer
export default class App extends React.Component {
  render () {
    const todoStore = this.props[STORT_TEST] as TestStore
    return (
      <div
        onClick={() => todoStore.addTodo('1')}
      >
        {
          todoStore.todos.map((todo, i) => 
            <span key={i}>{todo}</span>
          )
        }
      </div>
    )
  }
}