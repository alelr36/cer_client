import React from 'react'

import './authenticate.scss'

class Authenticate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const username = this.state.username
    const password = this.state.password

    this.props.submitLogin({ username, password })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { username, password } = this.state

    return (
      <div className='authenticate'>
        <form role='form' className='login-form' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='cerEmail'>Email address</label>
            <input onChange={this.handleChange}
                   value={username}
                   type='text'
                   className='form-control'
                   id='cerEmail'
                   name='username'
                   placeholder='Email'
                   required />
          </div>
          <div className='form-group'>
            <label htmlFor='cerPassword'>Password</label>
            <input onChange={this.handleChange}
                   value={password}
                   type='password'
                   className='form-control'
                   id='cerPassword'
                   name='password'
                   placeholder='Password'
                   required />
          </div>
          <input type='submit' value='Login' className='btn btn-default' />
        </form>
      </div>
    )
  }

}

export default Authenticate
