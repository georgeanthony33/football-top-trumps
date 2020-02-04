import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  state = {
    data: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
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
      await axios.post('/api/register', this.state.data)
      this.props.history.push('/login')
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
    }
  }

  render() {
    return (
      <>
        <div className="page-title">
          <h2 id="white-text">Register</h2>
        </div>
        <div className="register-outer-container">
          <form className="register-form" onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Username</label>
              <input
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              />
              {this.state.errors.username && <small>{this.state.errors.username}</small>}
            </div>
      
            <div className="field">
              <label className="label">Email</label>
              <input
                className={`input ${this.state.errors.email} ? : 'is-danger' : '' `}
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

            <div className="field">
              <label className="label">Password Confirmation</label>
              <input
                className={`input ${this.state.errors.passwordConfirmation} ? : 'is-danger' : '' `}
                name="passwordConfirmation"
                type="password"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
              />
              {this.state.errors.passwordConfirmation && <small>{this.state.errors.passwordConfirmation}</small>}
            </div>

            <div className="button-field">
              <button type="submit">Register</button>
            </div>

          </form>
        </div>
      </>
    )
  }
}

export default Register