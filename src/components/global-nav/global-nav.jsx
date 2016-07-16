import React from 'react';

import './global-nav.scss';

const GlobalNav = React.createClass({

  render() {
    return (
      <nav className="global-nav navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="index.html">Centro Educativo Regional</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <a className="scroller" href="#nosotros">Nosotros</a>
              </li>
              <li>
                <a className="scroller" href="#cursos">Cursos</a>
              </li>
              <li>
                <a className="scroller" href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

});

export default GlobalNav;