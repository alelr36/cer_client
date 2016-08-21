import React from 'react'

import './course-form.scss'

class Form extends React.Component {

  componentWillMount() {
    this.checkAuth()
  }

  componentDidMount() {
    this.checkAuth()
  }

  checkAuth() {
    if (!this.props.user.token) {
      this.props.redirect('/login')
    }
  }

  render() {
    return (
      <div className='course-form'>
        <form>
          <div className='form-group'>
            <input type='text' className='form-control' id='title' placeholder='Course Title' />
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' id='name' placeholder='Course Name' />
          </div>
          <div className='form-group'>
            <textarea className='form-control' id='description' placeholder='Course Description'>
            </textarea>
          </div>
          <input type='submit' value='Save' className='btn btn-default' />
        </form>
      </div>
    )
  }

}

Form.defaultProps = {
  user: {}
}

export default Form
