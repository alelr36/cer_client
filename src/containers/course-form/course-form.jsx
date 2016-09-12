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

    this.props.createCourse(this.state.course)
  }

  // TODO: The change should be debounced, and the values should go to the global state
  handleChange(event) {
    this.setState({
      ...this.state,
      course: {
        ...this.state.course,
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    const course = this.state

    return (
      <div className='course-form'>
        <form role='form' className='course-form' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input onChange={this.handleChange}
                   value={course.title}
                   type='text'
                   className='form-control'
                   name='title'
                   id='title'
                   placeholder='Course Title'
                   required/>
          </div>
          <div className='form-group'>
            <input onChange={this.handleChange}
                   value={course.name}
                   type='text'
                   className='form-control'
                   name='name'
                   id='name'
                   placeholder='Course Name'
                   required/>
          </div>
          <div className='form-group'>
            <textarea onChange={this.handleChange}
                      value={course.description}
                      className='form-control'
                      name='description'
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
  newCourse: {} // define new course once it's in the global state
}

export default Form
