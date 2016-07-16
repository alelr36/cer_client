import React from 'react';
import GlobalHeader from './global-header/global-header';
import GlobalNav from './global-nav/global-nav';
import Slider from './slider/slider';
import AboutUs from './about-us/about-us';
import Courses from './courses/courses';
import Contact from './contact/contact';
import Footer from './global-footer/global-footer';

const Main = React.createClass({

  render() {
    return (
      <div className="main">
        <GlobalHeader />
        <GlobalNav />
        <div className="container">
          <div className="row">
            <Slider />
          </div>
          <div className="row">
            <AboutUs />
          </div>
          <div className="row">
            <Courses />
          </div>
          <div className="row">
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

});

export default Main;