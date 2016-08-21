import React from 'react'
import GlobalHeader from 'components/global-header'
import Footer from 'components/global-footer'

class App extends React.Component {

  render() {
    return (
      <div className='cer-app'>
        <GlobalHeader />
        {this.props.children}
        <Footer />
      </div>
    )
  }

}

export default App
