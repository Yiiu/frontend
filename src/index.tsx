import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  Router,
  Route
} from 'react-router-dom'

import App from './routes/App'
import configureStore from './stores'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory'
import './styles/index.less'

const store = configureStore()
const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={ store }>
    <Router history={history}>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
