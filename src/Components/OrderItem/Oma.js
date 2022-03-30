import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Oma.css";

const Oma = (props) => {
  const { product, handleRemove } = props;
  const { name, img, price, shipping, quantity } = props.product;

  return (
    <div className="oma-container">
      <img src={img} alt="" />
      <div className="oma-details-container">
        <div className="oma-details">
          <p>{name.lenght > 20 ? name.slice(0, 20) : name}</p>
          <p>price : ${price}</p>
          <p>shipping: ${shipping}</p>
          <p>quantity: {quantity}</p>
        </div>
        <div className="oma-delete-button">
          <button onClick={() => handleRemove(product)}>
            <FontAwesomeIcon className="icon" icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Oma;
