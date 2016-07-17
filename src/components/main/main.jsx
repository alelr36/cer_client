import React from 'react';
import GlobalHeader from 'components/global-header/global-header';
import GlobalNav from 'components/global-nav/global-nav';
import Slider from 'components/slider/slider';
import AboutUs from 'components/about-us/about-us';
import Courses from 'components/courses/courses';
import Contact from 'components/contact/contact';
import Footer from 'components/global-footer/global-footer';

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