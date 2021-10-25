import React from "react";
import "../../styles/components/navbar/Logo.scss";

export const Logo = () => {
  return (
    <div className="containerLogo">
      <div className="containerLogoImg">
        <img
          src="https://res.cloudinary.com/www-amonadeco-com-ar/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1634926598/AmonaDeco/logo_x2ybce.png"
          alt=""
        />
      </div>

      <h1>Amona Deco</h1>
    </div>
  );
};
