import React from 'react'

import './admin.scss'

const Main = React.createClass({

  render() {
    return (
      <div className='admin'>
        <form role='form' className='login-form'>
          <div className='form-group'>
            <label htmlFor='cerEmail'>Email address</label>
            <input type='email' className='form-control' id='cerEmail' placeholder='Email' />
          </div>
          <div className='form-group'>
            <label htmlFor='cerPassword'>Password</label>
            <input type='password' className='form-control' id='cerPassword'
                   placeholder='Password' />
          </div>
          <input type='submit' value='Login' className='btn btn-default' />
        </form>
      </div>
    )
  }

})

export default Main
