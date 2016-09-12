import React from 'react'

// import './course.scss'

class Course extends React.Component {
  render() {
    return (
      <article className='course'>
        <h1>{this.props.course.name}</h1>
        {this.getCourseControls()}
      </article>
    )
  }

  getCourseControls() {
    let controls = null

    if (!_.isEmpty(this.props.course)) {
      controls = <div>
        <button onClick={() => this.props.deleteCourse(this.props.course._id)}>DELETE</button>
        <button>SAVE</button>
      </div>
    }

    return controls
  }

}

Course.defaultProps = {
  course: {}
}

export default Course
