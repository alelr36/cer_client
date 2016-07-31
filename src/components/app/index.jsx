import React from 'react'
import GlobalHeader from 'components/global-header'
import Footer from 'components/global-footer'

const App = React.createClass({

  render() {
    return (
      <div className='cer-app'>
        <GlobalHeader />
        {this.props.children}
        <Footer />
      </div>
    )
  }

})

export default App
