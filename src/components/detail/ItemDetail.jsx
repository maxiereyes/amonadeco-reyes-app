import React, { useState, useEffect } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import { GalleryComponent } from "../gallery/GalleryComponent";
import { ItemCount } from "./ItemCount";
import { useCartContext } from "../../context/cartContext";
import "../../styles/components/detail/ItemDetail.scss";

export const ItemDetail = ({ product }) => {
  const { description, title, gallery, variants, subtitle } = product;
  const { addToCart } = useCartContext();
  const [currentColor, setCurrentColors] = useState([]);
  const [selectedSize, setSelectedSize] = useState(variants[0].size);
  const [selectedColor, setSelectedColor] = useState(variants[0].color);

  useEffect(() => {
    const colors = [];
    variants.forEach((variant) => {
      if (variant.size === selectedSize) {
        colors.push(variant.color);
      }
    });
    setCurrentColors(colors);
    setSelectedColor(colors[0]);
  }, [variants, selectedSize]);

  const changeSelectedSize = (e) => {
    setSelectedSize(e.target.value);
  };

  const changeSelectedColor = (e) => {
    setSelectedColor(e.target.value);
  };

  const getVariants = (key) => {
    return key
      ? variants.find(
          (variant) =>
            variant.size === selectedSize && variant.color === selectedColor
        )[key]
      : variants.find(
          (variant) =>
            variant.size === selectedSize && variant.color === selectedColor
        );
  };

  const onAdd = (count) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: getVariants("price"),
      count,
      variants: getVariants(),
      image: product.image,
      total: getVariants("price") * count,
    });
  };

  return (
    <Row className="containerDetail">
      <Col md={6} className="containerGallery">
        <GalleryComponent images={gallery} />
      </Col>
      <Col md={6} className="containerDetailData">
        <h1 className="customTitle">{title}</h1>
        <h2 className="customSubtitle">{subtitle}</h2>
        <h3 className="customPrice">${variants[0].price.toFixed(2)}</h3>
        <Tabs
          defaultActiveKey="description"
          id="uncontrolled-tab-example"
          className="containerTabDescription"
        >
          <Tab
            eventKey="description"
            title="Descripcion"
            className="itemTabDescription"
          >
            <p className="infoTitleTabsDescription">{description}</p>
          </Tab>
        </Tabs>

        <div className="containerSelect">
          <h3 className="titleSelect">Medidas</h3>
          <div className="containerSelectVariant">
            <select className="selectVariant" onChange={changeSelectedSize}>
              {variants.map((item, index) => {
                if (index === 0 || item.size !== variants[index - 1].size) {
                  return (
                    <option key={index} value={item.size}>
                      {item.size}
                    </option>
                  );
                }

                // eslint-disable-next-line array-callback-return
                return;
              })}
            </select>
          </div>
        </div>

        <div className="containerSelect">
          <h3 className="titleSelect">Colores</h3>
          <div className="containerSelectVariant">
            <select className="selectVariant" onChange={changeSelectedColor}>
              {currentColor.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <ItemCount
          stock={getVariants() ? getVariants().stock : 0}
          initial={1}
          addItem={onAdd}
          currentVariantsSize={selectedSize}
          currentVariantsColor={selectedColor}
        />
      </Col>
    </Row>
  );
};
