import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Login extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    errors: {}
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res =  await axios.post('/api/login', this.state.data)
      Auth.setToken(res.data.token)
      this.props.history.push('/players')
    } catch (err) {
      this.setState({ error: 'Incorrect Credentials' })
    }
  }

  render() {
    return (
      <>
        <div className="page-title">
          <h2 id="white-text">Login</h2>
        </div>
        <div className="login-outer-container">
          <form  className="login-form" onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <input
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              {this.state.errors.email && <small>{this.state.errors.email}</small>}
            </div>

            <div className="field">
              <label className="label">Password</label>
              <input
                className={`input ${this.state.errors.password} ? : 'is-danger' : '' `}
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              {this.state.errors.password && <small>{this.state.errors.password}</small>}
            </div>

            <div className="button-field">
              <button type="submit">Login</button>
            </div>

          </form>
        </div>
      </>
    )
  }
}

export default Login