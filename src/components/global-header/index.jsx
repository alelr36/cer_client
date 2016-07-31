import React from 'react'
import './global-header.scss'

const GlobalHeader = React.createClass({

  render() {
    return (
      <div className='global-header'>
        <div className='brand'>CER</div>
        <div className='address-bar'>Centro Educativo Regional</div>
        <div className='address-bar'>Belle Ville, Córdoba, Argentina</div>
      </div>
    )
  }

})

export default GlobalHeader
