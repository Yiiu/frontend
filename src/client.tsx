import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import App from './containers/App.tsx'
import configureStore from './stores'
import './styles/index.less'

const store = configureStore()

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require<{default: typeof App}>('./containers/App.tsx').default // eslint-disable-line global-require

    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
