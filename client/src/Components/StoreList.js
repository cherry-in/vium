import React from "react";
import chicken from "../images/chicken.jpeg";

const StoreList = () => {
  const round = {
    height: "110px",
    width: "402px",
    borderRadius: "13px",
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
          <>
            <div key={i} style={round} className="d-flex p-1 w-100">
              <img
                src={chicken}
                className="my-auto"
                style={{ width: "90px", height: "90px", borderRadius: "7px" }}
              />
              <div className="my-auto ml-3">
                <h4 className="fw-bold">우리동네 치킨</h4>
                <small className="text-muted">
                  재주문 +1000 565m 포장가능
                  <br />
                  55~65분 배달요금 3,000원
                </small>
              </div>
            </div>
            <hr className="my-1" />
          </>
        );
      })}
    </div>
  );
};

export default StoreList;
