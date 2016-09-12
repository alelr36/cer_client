import React from 'react'
import CoursesList from 'containers/courses-list'
import CourseForm from 'containers/course-form'

class Admin extends React.Component {

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
        <button onClick={this.props.logout}>Logout</button>
        <CoursesList />
        <CourseForm />
      </div>
    )
  }
}

export default Admin
