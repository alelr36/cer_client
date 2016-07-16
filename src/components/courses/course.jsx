import React from 'react';

import './course.scss';

const Course = React.createClass({

  getInitialState() {
    return {
      course: {
        name: 'test', description: 'test'
      }
    };
  },

  render() {
    return (
      <article className="course">
        <figure>
          <img width="200" src="http://michelletorres.mx/wp-content/uploads/2016/02/js.jpg" alt=""/>
        </figure>
        <p>A huge thanks to Death to the Stock for allowing us to use the beautiful photos that make this template really come to life. When using this template, make sure your photos are decent. Also make sure that the file size on your photos is kept to a minumum to keep load times to a minimum.</p>
        <ul>
          <li>A huge thanks to Death to the Stock for allowing us</li>
          <li>A huge thanks to Death to the Stock for allowing us</li>
          <li>A huge thanks to Death to the Stock for allowing us</li>
          <li>A huge thanks to Death to the Stock for allowing us</li>
          <li>A huge thanks to Death to the Stock for allowing us</li>
          <li>A huge thanks to Death to the Stock for allowing us</li>
        </ul>
      </article>
    );
  }
});

export default Course;