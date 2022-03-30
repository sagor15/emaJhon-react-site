import React from "react";
import "./Oma.css";

const Oma = (props) => {
  const { name } = props.product;
  console.log(props);
  return (
    <div className="oma-name">
      <h1>{name}</h1>
    </div>
  );
};

export default Oma;
