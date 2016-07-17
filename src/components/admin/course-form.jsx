import React from 'react';

import './course-form.scss';

const Form = React.createClass({

  render() {
    return (
      <div className="course-form">
        <form action="POST">
          <div className="form-group">
            <input type="text" className="form-control" id="title" placeholder="Course Title" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="name" placeholder="Course Name" />
          </div>
          <div className="form-group">
            <textarea className="form-control" id="description" placeholder="Course Description">
            </textarea>
          </div>
          <input type="submit" value="Login" className="btn btn-default" />
        </form>
      </div>
    );
  }

});

export default Form;