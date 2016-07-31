import React from 'react'
import Course from './course'

import './courses.scss'

const propTypes = React.PropTypes

const Courses = React.createClass({
  propTypes: {
    courses: propTypes.array.isRequired
  },

  render() {
    return (
      <div id='cursos' className='courses box'>
        <ul className='courses-list'>
          {
            this.props.courses.map((course, key) => <li key={key}>{course.name}</li>)
          }
        </ul>
        <Course />
      </div>
    )
  }
})

export default Courses
