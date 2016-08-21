import React from 'react'
import Course from 'components/course'

import './courses.scss'

class Courses extends React.Component {
  componentDidMount() {
    this.props.fetchCourses()
  }

  render() {
    const course = _.find(this.props.courses, (c) => c._id === this.props.selectedCourse)

    return (
      <div id='cursos' className='courses box'>
        <ul className='courses-list'>
          {this.createCoursesList()}
        </ul>
        <Course course={course} />
      </div>
    )
  }

  createCoursesList() {
    return this.props.courses.map((course, key) =>
      <li key={key} onClick={() => this.props.selectCourse(course)}>
        <a>{course.title}</a>
      </li>
    )
  }
}

export default Courses