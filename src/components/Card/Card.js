import React from 'react'

const Card = (props) => {
    const {titulo, descripcion, precio, img, btnText} = props
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 ">
  <div className="col">
    <div className="card h-100 d-flex">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">{precio}</p>
        <a href="#" className="btn btn-primary">{btnText}</a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Card