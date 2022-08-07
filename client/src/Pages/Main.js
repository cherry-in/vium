import React from "react";
import Banner from "../Components/Banner";
import Calories from "../Components/Calories";
import FoodCategory from "../Components/FoodCategory";
import Footer from "../Components/Footer";
import Top from "../Components/Top";

const Main = () => {
  return (
    <div className="d-flex flex-column h-100">
      <Top />
      <Calories />
      <Banner />
      <FoodCategory />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
