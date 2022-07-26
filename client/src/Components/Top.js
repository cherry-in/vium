import React from "react";
import Cart from "./Cart";
import InputLocation from "./InputLocation";

const Top = () => {
  return (
    <div className="row">
      <div className="col">
        <InputLocation />
      </div>
      <div className="col">
        <Cart />
      </div>
    </div>
  );
};

export default Top;
