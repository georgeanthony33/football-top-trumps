import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/main.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import SecureRoute from './components/common/SecureRoute'
import ReverseSecureRoute from './components/common/ReverseSecureRoute'
import PlayersIndex from './components/players/PlayersIndex'
import PlayerShow from './components/players/PlayerShow'
import PlayerNew from './components/players/PlayerNew'
import PlayerEdit from './components/players/PlayerEdit'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <SecureRoute path="/players/:id/edit" component={PlayerEdit} />
        <SecureRoute path="/players/new" component={PlayerNew} />
        <Route path="/players/:id" component={PlayerShow} />
        <Route path="/players" component={PlayersIndex} />
        <ReverseSecureRoute path="/register" component={Register} />
        <ReverseSecureRoute path="/login" component={Login} />
      </Switch>
    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)