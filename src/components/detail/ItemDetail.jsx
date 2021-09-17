import React from "react";
import { useHistory } from "react-router-dom";
import { CustomBreadCrumb } from "../breadcrumb/CustomBreadCrumb";
import { GalleryComponent } from "../gallery/GalleryComponent";
import { ItemCount } from "./ItemCount";
import { CurrencyFormat } from "../utils/CurrencyFormat";
import { FreeTax } from "../utils/FreeTax";
import { InputSelect } from "../utils/InputSelect";
import { Title } from "../utils/Title";
import "../../styles/components/itemdetail.css";

export const ItemDetail = ({ product }) => {
  const {
    location: { pathname },
  } = useHistory();

  const {
    description,
    title,
    freeTax,
    price,
    gallery,
    measures,
    subtitle,
    specification,
    stock,
  } = product;

  const addItem = (count) => {
    alert(`Se agregaron ${count} unidades de ${title} a tu carrito`);
  };

  return (
    <div className="row py-4">
      <div className="col-12 col-lg-7 my-2">
        <GalleryComponent images={gallery} />
      </div>
      <div className=" px-4 col-12 col-lg-4 offset-lg-1 justify-content-center justify-content-lg-start d-flex flex-column align-items-lg-start align-items-center my-lg-2 my-4">
        <div>
          <CustomBreadCrumb path={pathname.split("/")} />
        </div>
        <h1 className="m-0 mb-2 text-uppercase">{title}</h1>
        <h2 className="m-0 mb-2 lead text-muted">{subtitle}</h2>
        <h3 className="m-0 my-4 font-weight-bold custom__price__font">
          <CurrencyFormat value={price} prefix="$" />
        </h3>
        <div className="my-2">
          <FreeTax tax={freeTax} price={price} />
        </div>
        <div className="d-flex align-items-center">
          <p className="my-0 text-secondary">Medidas:</p>
          <div className="mx-2">
            <InputSelect items={measures} />
          </div>
        </div>

        <div className="mt-4">
          <ItemCount stock={stock} initial={1} action={addItem} />
        </div>
      </div>
      <div className="border rounded col-12 col-lg-7 my-4">
        <div className="container__description">
          <Title text="descripcion" />
          <p>{description}</p>
        </div>
      </div>
      <div className="border rounded col-12 col-lg-4 offset-lg-1 my-4 align-self-start">
        <div className="container__specification">
          <Title text="especificaciones" />
          {Object.entries(specification).map((item, index) => (
            <div key={index} className="d-flex align-items-center my-4">
              <h6 className="m-0 text-uppercase font-weight-bold">
                {item[0]}:
              </h6>
              <p className="m-0 mx-2 text-secondary">{item[1]}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border rounded col-12 col-lg-7 my-2">
        <div className="container__reviews">
          <Title text="comentarios" />
          <div className="d-flex">
            <div className="container__avatar p-2">
              <img
                className="rounded-circle"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="p-2">
              <h6 className="m-0 font-weight-bold">Maximiliano</h6>
              <p className="m-0 font-weight-light ">
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Saepe, distinctio?"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded col-12 col-lg-4 offset-lg-1 my-2">
        <div className="container__form">
          <Title text="deja tu comentario" />
          <p className="text-muted">Tu opinion nos interesa...</p>
        </div>
      </div>
    </div>
  );
};
