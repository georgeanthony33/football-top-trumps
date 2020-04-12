import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Auth from '../../lib/Auth'

const ReverseSecureRoute = ({ component: Component, ...rest }) => {
  if (!Auth.isAuthenticated()) return <Route {...rest} component={Component}/>
  Auth.logout()
  return <Redirect to="/"/>
}

export default ReverseSecureRoute