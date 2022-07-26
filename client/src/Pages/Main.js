import React from "react";
import Banner from "../Components/Banner";
import Calories from "../Components/Calories";
import FoodCategory from "../Components/FoodCategory";
import Footer from "../Components/Footer";
import Top from "../Components/Top";

const Main = () => {
  return (
    <div>
      <Top />
      <Calories />
      <Banner />
      <FoodCategory />
      <Footer />
    </div>
  );
};

export default Main;
