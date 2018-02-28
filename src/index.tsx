import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history';
import {
  Router,
  Route
} from 'react-router-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'

import { RouterStore, TestStore } from './stores';

import App from './routes/App'
import registerServiceWorker from './registerServiceWorker'
import { STORE_ROUTER, STORT_TEST } from './constants/stores'
import './styles/index.less'

useStrict(true)

const history = createBrowserHistory();
const routerStore = new RouterStore(history);
const testStore = new TestStore(['1', '2', '3']);

const rootStores = {
  [STORE_ROUTER]: routerStore,
  [STORT_TEST]: testStore
};

ReactDOM.render(
  <Provider {...rootStores}>
    <Router history={history}>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
