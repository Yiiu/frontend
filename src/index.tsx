import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './containers/App'
import configureStore from './stores'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux';
import './styles/index.less'
const store = configureStore()
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
