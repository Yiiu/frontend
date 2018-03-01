import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'

import App from './routes/App'
import registerServiceWorker from './registerServiceWorker'

import rootStores from './stores'

import './styles/basic.less'

useStrict(true)

ReactDOM.render(
  <Provider {...rootStores}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
