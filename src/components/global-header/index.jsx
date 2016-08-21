import React from 'react'
import './global-header.scss'

class GlobalHeader extends React.Component {

  render() {
    return (
      <div className='global-header'>
        <div className='brand'>CER</div>
        <div className='address-bar'>Centro Educativo Regional</div>
        <div className='address-bar'>Belle Ville, Córdoba, Argentina</div>
      </div>
    )
  }

}

export default GlobalHeader
