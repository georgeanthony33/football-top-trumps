import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/Auth'

class Navbar extends React.Component {
  state = {
    navOpen: false
  }

  toggleNavbar = () => {
    this.setState({ navOpen: !this.state.navOpen })
  }

  handleLogout = () => {
    Auth.logout()
    // notify.show('Come back soon!', 'custom', 3000, { background: '#FFFFF0' })
    this.props.history.push('/')
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navOpen: false })
    } 
  }

  render() {
    return (
      <>
        <nav className="navbar-container">
          <div className="navbar-left">
            <div className="navbar-link-div">
              <Link to="/"><h4>Home</h4></Link>
            </div>
            <div className="navbar-link-div">
              <Link to="/players"><h4>Show players</h4></Link>
            </div>
            <div className="navbar-link-div">
              {Auth.isAuthenticated() && <Link to="/players/new"><h4>Make a player</h4></Link>}
            </div>
          </div>
          <div className="navbar-right">
            {!Auth.isAuthenticated() && <div className="navbar-link-div">
              <Link to="/register"><h4>Register</h4></Link>
            </div>}
            {!Auth.isAuthenticated() && <div className="navbar-link-div">
              <Link to="/login"><h4>Login</h4></Link>
            </div>}
            {Auth.isAuthenticated() && <div className="navbar-link-div">
              <h4><a onClick={this.handleLogout}>Logout</a></h4>
            </div>}
          </div>
        </nav>
      </>
    )
  }
}

export default withRouter(Navbar)