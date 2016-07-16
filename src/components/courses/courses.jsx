import React from 'react';
import Course from './course';

import './courses.scss';

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
      <div id="cursos" className="courses box">
        <ul className="courses-list">
          {
            this.state.courses.map((course, key) => {
              return <li key={key}>{course.name}</li>;
            })
          }
        </ul>
        <Course />
      </div>
    );
  }
});

export default Courses;