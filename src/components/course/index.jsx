import React from 'react'

import './course.scss'

class Course extends React.Component {
  render() {
    return (
      <article className='course'>
        <figure>
          <img width='400' src='http://michelletorres.mx/wp-content/uploads/2016/02/js.jpg' alt=''/>
        </figure>

        <h1>{this.props.course.name}</h1>

        <p>
          {this.props.course.description}
        </p>
        <ul>
          <li>A huge thanks to Death to the Stock for allowing us</li>
          <li>A huge thanks to Death to the Stock for allowing us</li>
          <li>A huge thanks to Death to the Stock for allowing us</li>
          <li>A huge thanks to Death to the Stock for allowing us</li>
          <li>A huge thanks to Death to the Stock for allowing us</li>
          <li>A huge thanks to Death to the Stock for allowing us</li>
        </ul>
      </article>
    )
  }
}

Course.defaultProps = {
  course: {}
}

export default Course
