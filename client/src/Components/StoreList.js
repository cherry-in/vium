import React from "react";

const StoreList = () => {
  const round = {
    height: "68px",
    width: "402px",
    borderRadius: "13px",
    background: "#D9D9D9",
  };
  const stores = [
    "음식점",
    "음식점",
    "음식점",
    "음식점",
    "음식점",
    "음식점",
    "음식점",
  ];
  return (
    <div>
      {stores.map((item, i) => {
        return (
          <div key={i} style={round}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default StoreList;
