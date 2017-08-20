import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers'
// import { StoreState } from '../models/index'
import thunkMiddleware from 'redux-thunk'

function reduxStore () {
  const store = createStore<object>(
    reducers,
    compose(
      applyMiddleware(
        thunkMiddleware
      ),
      (window as any).devToolsExtension && (window as any).devToolsExtension()
    )
  )
  return store
}
export default reduxStore
