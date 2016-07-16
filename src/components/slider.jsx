import React from 'react';

function Slider() {
  return (
    <div className="slider box">
      <div className="col-lg-12 text-center">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators hidden-xs">
            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1" className=""></li>
            <li data-target="#carousel-example-generic" data-slide-to="2" className=""></li>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <img className="img-responsive img-full" src="img/slide-1.jpg" alt="" />
            </div>
            <div className="item">
              <img className="img-responsive img-full" src="img/slide-2.jpg" alt="" />
            </div>
            <div className="item">
              <img className="img-responsive img-full" src="img/slide-3.jpg" alt="" />
            </div>
          </div>

          <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
            <span className="icon-prev"></span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
            <span className="icon-next"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Slider;