import React from "react";
import { Title } from "../utils/Title";
import "../../styles/components/categories/HighlistCategories.scss";
import { useHistory } from "react-router-dom";

export const HighlistCategories = () => {
  const history = useHistory();

  const goToCategory = (idCategory) => {
    history.push(`/categoria/${idCategory}`);
  };
  return (
    <div className="my-5">
      <Title text="Categorias Destacadas" />
      <div className="containerHighlist">
        <div
          className="highlistPrimary"
          onClick={() => goToCategory("6ExhEuViV0iZUts4vEcw")}
        >
          <h2 className="titleHighlist">Latas Decorativas</h2>
        </div>

        <div className="highlistContainerSecondary">
          <div
            className="highlistSecondary"
            onClick={() => goToCategory("tZZTFXj0Y7WEqdQJpEqT")}
          >
            <h2 className="titleHighlist">Espejos</h2>
          </div>
          <div
            className="highlistSecondary"
            onClick={() => goToCategory("9xMu56WmiPD2rAbKML3I")}
          >
            <h2 className="titleHighlist">Almohadones</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
