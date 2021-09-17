import React from "react";
import CartWidget from "../cart/CartWidget";
import "../../styles/components/navbar.css";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routesDefinition";
import { LinkComponent } from "./LinkComponent";

const NavBar = () => {
  return (
    <div className="shadow-sm p-2 mb-2 rounded">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="rounded-circle"
              src="assets/img/logo.jpeg"
              alt=""
              width="80"
              height="80"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center align-self-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center">
              {routes.map((route, index) =>
                route.nestedItem && route.nestedItem.length ? (
                  <li className="nav-item dropdown mx-1" key={index}>
                    <LinkComponent
                      className="nav-link dropdown-toggle"
                      href="index.html"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      text={route.name}
                    />
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        {route.nestedItem.map((item, index) => (
                          <LinkComponent
                            key={index}
                            className="dropdown-item"
                            text={item.name}
                            path={`${route.path}${item.path}`}
                          />
                        ))}
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item mx-1" key={index}>
                    <LinkComponent
                      text={route.name}
                      path={route.path}
                      className="nav-link"
                    />
                  </li>
                )
              )}
            </ul>
            <div className="mx-4 mt-3 d-flex justify-content-center align-items-center custom-session">
              <a
                href="iniciar-sesion"
                className="my-2 mx-2 text-secondary  link-custom-session"
              >
                INICIAR SESION
              </a>
              <span>|</span>
              <a
                href="crear-cuenta"
                className="my-2 mx-2 text-secondary  link-custom-session"
              >
                CREAR CUENTA
              </a>
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
