import React from 'react'
import CoursesList from 'containers/courses-list'
import CourseForm from 'containers/course-form'

class Admin extends React.Component {
  constructor(props) {
    super(props)
  }

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
      <div className='admin'>
        <CoursesList />
        <CourseForm />
      </div>
    )
  }
}

export default Admin