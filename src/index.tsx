import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './routes/App'
import configureStore from './stores'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux';
import './styles/index.less'

const store = configureStore()

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
