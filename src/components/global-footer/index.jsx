import React from 'react'
import moment from 'moment'

import './global-footer.scss'

class GlobalFooter extends React.Component {

  render() {
    return (
      <footer className='global-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <p>Copyright © Your Website {moment().format('YYYY')}</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }

}

export default GlobalFooter
