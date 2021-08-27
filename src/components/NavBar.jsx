import React from 'react'

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
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="index.html">Inicio</a>
                            </li>
                            <li class="nav-item dropdown mx-2">
                                <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home and Deco
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="todos-los-productos">Todos los productos</a></li>
                                    <li><a className="dropdown-item" href="almohadones">Almohadones</a></li>
                                    <li><a className="dropdown-item" href="caminos">Caminos de Mesa</a></li>
                                    <li><a className="dropdown-item" href="espejos">Espejos</a></li>
                                    <li><a className="dropdown-item" href="fundas-almohadones">Fundas de Almohadones</a></li>
                                    <li><a className="dropdown-item" href="manteles">Manteles</a></li>
                                    <li><a className="dropdown-item" href="tapices">Tapices</a></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="preguntas-frecuentes">Preguntas Frecuentes</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
