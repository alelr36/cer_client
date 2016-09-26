import React from 'react'
import classNames from 'classnames'
import Course from 'containers/course'

import './courses-list.scss'

class Courses extends React.Component {
  componentDidMount() {
    this.props.fetchCourses()
  }

  render() {
    const course = _.find(this.props.courses, c => c._id === this.props.selectedCourse)

    return (
      <div className='courses box'>
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
        <a className={classNames({ selected: this.props.selectedCourse === course._id })}>
          {course.title}
        </a>
      </li>
    )
  }
}

export default Courses
