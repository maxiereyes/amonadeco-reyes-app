import React, { useEffect, useState } from "react";
import CartWidget from "../cart/CartWidget";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routesDefinition";
import { LinkComponent } from "./LinkComponent";
import { getCategories } from "../../api/categoryService";
import "../../styles/components/navbar/Navbar.scss";
import { Logo } from "./Logo";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllCategories();
  }, []);

  return (
    <div className="containerNavbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          <Logo />
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            {routes.map((route, index) =>
              route.nested ? (
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
                      {categories.map((item) => (
                        <LinkComponent
                          key={item.id}
                          className="dropdown-item"
                          text={item.name}
                          path={`${route.path}/${item.id}`}
                        />
                      ))}
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item" key={index}>
                  <LinkComponent
                    text={route.name}
                    path={route.path}
                    className="nav-link"
                  />
                </li>
              )
            )}
          </ul>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
