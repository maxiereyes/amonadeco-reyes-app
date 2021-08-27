import React from 'react'
import './navbar.css'

const NavBar = () => {
    return (
        <div className="shadow-lg p-2 mb-2 rounded">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">
                        <img className="rounded-circle" src="assets/img/logo.jpeg" alt="" width="80" height="80" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center align-self-end" id="navbarNav">
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item mx-1">
                                <a className="nav-link" href="index.html">INICIO</a>
                            </li>
                            <li class="nav-item dropdown mx-1">
                                <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    HOME AND DECO
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="todos-los-productos">TODOS LOS PRODUCTOS</a></li>
                                    <li><a className="dropdown-item" href="almohadones">ALMOHADONES</a></li>
                                    <li><a className="dropdown-item" href="caminos">CAMINOS DE MESA</a></li>
                                    <li><a className="dropdown-item" href="espejos">ESPEJOS</a></li>
                                    <li><a className="dropdown-item" href="fundas-almohadones">FUNDAS DE ALMOHADONES</a></li>
                                    <li><a className="dropdown-item" href="manteles">MANTELES</a></li>
                                    <li><a className="dropdown-item" href="tapices">TAPICES</a></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-1">
                                <a className="nav-link" href="preguntas-frecuentes">PREGUNTAS FRECUENTES</a>
                            </li>
                            <li className="nav-item mx-1">
                                <a className="nav-link" href="contacto">CONTACTO</a>
                            </li>
                        </ul>
                        <div className="mx-4 mt-3 d-flex justify-content-center align-items-center custom-session">
                                <a href="iniciar-sesion" className="my-2 mx-2 text-secondary  link-custom-session">
                                    INICIAR SESION
                                </a>
                                <span>|</span>
                                <a href="crear-cuenta" className="my-2 mx-2 text-secondary  link-custom-session">
                                    CREAR CUENTA
                                </a>
                                <button className="btn btn-outline-secondary position-relative">
                                    <i className="fas fa-shopping-cart custom-cart"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                                        0
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                        </div>    
                    </div>   
                    
                </div>
            </nav>
        </div>
    )
}

export default NavBar
