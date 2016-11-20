import React from 'react'

import './course-form.scss'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.createCourse(this.props.course)
  }

  handleChange(event) {
    const course = {
      ...this.props.course,
      [event.target.name]: event.target.value
    }

    this.props.updateCourseBeingCreated({ course })
  }

  render() {
    return (
      <div className='course-form'>
        <form role='form' className='course-form' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input onChange={this.handleChange}
                   value={this.props.course.title}
                   type='text'
                   className='form-control'
                   name='title'
                   placeholder='Course Title'
                   required/>
          </div>
          <div className='form-group'>
            <input onChange={this.handleChange}
                   value={this.props.course.name}
                   type='text'
                   className='form-control'
                   name='name'
                   placeholder='Course Name'
                   required/>
          </div>
          <div className="form-group">
            <input onChange={this.handleChange}
                   value={this.props.course.image}
                   type='file'
                   className='form-control'
                   name='image'
                   placeholder='Select an Image'/>
          </div>
          <div className="form-group">
            {this.createItemsList()}
            <button>+ Add</button>
          </div>
          <div className='form-group'>
            <textarea onChange={this.handleChange}
                      value={this.props.course.description}
                      className='form-control'
                      name='description'
                      placeholder='Course Description'
                      required>
            </textarea>
          </div>
          <input type='submit' value='Save' className='btn btn-default' />
        </form>
      </div>
    )
  }

  createItemsList() {
    return this.props.course.items.map((item, key) =>
      <input type="text" value='item' key={key}/>
    )
  }

}

export default Form
