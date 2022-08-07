import React from "react";
import Calories from "../Components/Calories";
import Footer from "../Components/Footer";
import Previous from "../Components/Previous";
import StoreLists from "../Components/StoreList";

const StoreList = () => {
  return (
    <div className="d-flex flex-column h-100">
      <Previous />
      <Calories color="#F2D16A" />
      <StoreLists />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default StoreList;
