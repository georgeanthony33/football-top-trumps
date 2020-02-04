import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  state = {
    navOpen: false
  }

  toggleNavbar = () => {
    this.setState({ navOpen: !this.state.navOpen })
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
              <h4>Make a player</h4>
            </div>
          </div>
          <div className="navbar-right">
            <div className="navbar-link-div">
              <Link to="/register"><h4>Register</h4></Link>
            </div>
            <div className="navbar-link-div">
              <Link to="/login"><h4>Login</h4></Link>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar