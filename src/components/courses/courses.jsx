import React from 'react';

const Courses = React.createClass({

  getInitialState() {
    return {
      courses: [
        {name: 'test', description: 'test'}
      ]
    };
  },

  componentDidMount() {
    this.serverRequest = $.get('https://cer-server.herokuapp.com/courses', function (result) {
      this.setState({
        courses: result.courses
      });
    }.bind(this));
  },

  render() {
    return (
      <div className="courses box">
        <section>
          <select name="course" id="courseSelector">
            {this.state.courses.map((course) => <option value={course.name}>{course.name}</option>)}
          </select>
        </section>
      </div>
    );
  }
});

export default Courses;