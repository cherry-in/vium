import React from "react";
import Cart from "./Cart";
import InputLocation from "./InputLocation";

const Top = () => {
  return (
    <div className="d-flex justify-content-between">
      <div></div>
      <div className="">
        <InputLocation />
      </div>
      <div className="">
        <Cart />
      </div>
    </div>
  );
};

export default Top;
