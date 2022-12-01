import React from 'react'
import "./Carusel.css"

const Carusel = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://www.ivreality.com.ar/wp-content/uploads/2022/11/salidasarg-02-12-949x1024.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Novedades Ivrea</h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://cinemagavia.es/wp-content/uploads/2021/02/novedades-Funko-.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Funkos por encargo</h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://http2.mlstatic.com/D_NQ_NP_812324-MLA25982398487_092017-O.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Tazas personalisadas</h5>
        <p></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
} 

export default Carusel