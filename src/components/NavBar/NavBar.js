import React from 'react'
import "./NavBar.css"
import CardWidget from '../CardWidget/CardWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Hellboy games <img src="" alt="" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
             <li class="nav-item">
              <a class="nav-link" href="#">Carrito<><CardWidget></CardWidget></></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Mangas</a></li>
                <li><a class="dropdown-item" href="#">Figuras</a></li>
                <li><a class="dropdown-item" href="#">Tazas</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar