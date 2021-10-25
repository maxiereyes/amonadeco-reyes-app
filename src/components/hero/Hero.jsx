import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/hero/Hero.scss";

export const Hero = () => {
  return (
    <div className="containerHero">
      <div className="containerHeroImage">
        <img
          src="https://res.cloudinary.com/www-amonadeco-com-ar/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1635199152/image0_kzmyl8.jpg"
          alt="imagen de amona deco"
        />
        <div className="overlayHero"></div>
      </div>

      <div className="containerHeroText">
        <h2>Quienes Somos</h2>
        <p>
          Nos dedicamos a la venta y asesoramiento de productos de decoracion
          para tu hogar.
        </p>
        <Link to="https://www.instagram.com/amonadecoar/">IG @amonadecoar</Link>
      </div>
    </div>
  );
};
