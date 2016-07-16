import React from 'react';

function GlobalNav() {
  return (
    <nav className="global-nav navbar navbar-default" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="index.html">Centro Educativo Regional</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li>
              <a href="#nosotros">Nosotros</a>
            </li>
            <li>
              <a href="#cursos">Cursos</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default GlobalNav;