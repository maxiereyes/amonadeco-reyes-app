import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../api/categoryService";
import "../../styles/components/footer/Footer.scss";
import { Title } from "../utils/Title";

export const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const cate = await getCategories();
        console.log(cate);
        setCategories(cate);
      } catch (error) {
        setCategories([]);
      }
    };

    getAllCategories();
  }, []);

  return (
    <div className="containerFooter">
      <div className="footerCategory">
        <Title text="Categorias" />
        {categories && categories.length
          ? categories.map((category) => (
              <Link to={`/categoria/${category.id}`}>{category.name}</Link>
            ))
          : null}
      </div>
      <div className="footerContact">
        <Title text="Donde estamos" />
        <p className="textFooter">
          <span>Telefono: </span>11 9999 5555
        </p>
        <p className="textFooter">
          <span>Direccion: </span>Avenida Corrientes 3030
        </p>
        <p className="textFooter">
          <span>Ubicacion: </span>Argentina, Buenos Aires, CABA
        </p>
      </div>
      <div className="footerSocials">
        <Title text="Seguinos" />
        <i class="fab fa-facebook socialIcon"></i>
        <i class="fab fa-instagram-square socialIcon"></i>
      </div>
    </div>
  );
};
