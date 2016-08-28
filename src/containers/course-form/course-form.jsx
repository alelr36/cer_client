import React from 'react'

import './course-form.scss'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      course: {
        title: '',
        name: '',
        description: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    const course = {
      title: this.state.title,
      name: this.state.name,
      description: this.state.description
    }

    this.props.submitLogin(course)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  /*Create an admin page for this*/
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
  /*Create an admin page for this*/

  render() {
    return (
      <div className='course-form'>
        <form role='form' className='course-form' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input type='text'
                   className='form-control'
                   id='title'
                   placeholder='Course Title'
                   required/>
          </div>
          <div className='form-group'>
            <input type='text'
                   className='form-control'
                   id='name'
                   placeholder='Course Name'
                   required/>
          </div>
          <div className='form-group'>
            <textarea className='form-control'
                      id='description'
                      placeholder='Course Description'
                      required>
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
