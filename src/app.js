import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/main.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import PlayersIndex from './components/players/PlayersIndex'
import PlayerShow from './components/players/PlayerShow'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/players/:id/:age" component={PlayerShow} />
        <Route path="/players" component={PlayersIndex} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)