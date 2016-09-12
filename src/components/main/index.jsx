import React from 'react'
import GlobalNav from 'components/global-nav'
import Slider from 'components/slider'
import AboutUs from 'components/about-us'
import Courses from 'containers/courses'
import Contact from 'components/contact'

class Main extends React.Component {

  render() {
    return (
      <div className='main'>
        <GlobalNav />
        <div className='container'>
          <div className='row'>
            <Slider />
          </div>
          <div className='row'>
            <AboutUs />
          </div>
          <div className='row'>
            <Courses />
          </div>
          <div className='row'>
            <Contact />
          </div>
        </div>
      </div>
    )
  }

}

export default Main
