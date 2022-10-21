import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import PermSecrets from './views/perm-secrets'
import Home from './views/home'
import Update42 from './views/update-42'
import LBPets from './views/l-b-pets'
import HalloweenEvent from './views/halloween-event'
import CynxsValuesInfo from './views/cynxs-values-info'
import NewHome from './views/new-home'
import Donate from './views/donate'
import LimitedSecrets from './views/limited-secrets'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={PermSecrets} exact path="/perm-secrets" />
        <Route component={Home} exact path="/home" />
        <Route component={Update42} exact path="/update-42" />
        <Route component={LBPets} exact path="/l-b-pets" />
        <Route component={HalloweenEvent} exact path="/halloween-event" />
        <Route component={CynxsValuesInfo} exact path="/cynxs-values-info" />
        <Route component={NewHome} exact path="/" />
        <Route component={Donate} exact path="/donate" />
        <Route component={LimitedSecrets} exact path="/limited-secrets" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
