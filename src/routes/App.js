import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Index from './routes/Index'

import {Header} from 'components'

class AppComponent extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <Route exact path="/" component={ Index }/>
          <Route path="/about" component={ About }/>
        </div>
      </Router>
    )
  }
}
const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default AppComponent
