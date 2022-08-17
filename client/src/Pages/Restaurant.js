import React from "react";
import Cart from "../Components/Cart";
import Previous from "../Components/Previous";

const Restaurant = () => {
  const box = {
    borderRadius: "13px",
    backgroundColor: "white",
    padding: "1rem",
    margin: "1rem",
    boxShadow: "0px 5px rgb(0,0,0,0.2)",
  };
  const menus = [
    {
      name: "후라이드 치킨",
      cal: 1975,
      price: "16,000원",
      src: "../images/chicken.jpeg",
    },
    {
      name: "양념 치킨",
      cal: 2130,
      price: "17,000원",
      src: "../images/chicken.jpeg",
    },
  ];
  return (
    <div>
      <div className="d-flex justify-content-between">
        <Previous />
        <h3 className="my-auto">우리동네 치킨</h3>
        <Cart />
      </div>
      <div className="d-flex justify-content-between my-3" style={box}>
        <h4 className="m-0">우리동네치킨</h4>
        <div className="d-flex">
          <svg
            className="mx-2 my-auto"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 17.6C17.8 17.6 16.95 17.975 16.3 18.5625L7.3875 13.375C7.45 13.0875 7.5 12.8 7.5 12.5C7.5 12.2 7.45 11.9125 7.3875 11.625L16.2 6.4875C16.875 7.1125 17.7625 7.5 18.75 7.5C20.825 7.5 22.5 5.825 22.5 3.75C22.5 1.675 20.825 0 18.75 0C16.675 0 15 1.675 15 3.75C15 4.05 15.05 4.3375 15.1125 4.625L6.3 9.7625C5.625 9.1375 4.7375 8.75 3.75 8.75C1.675 8.75 0 10.425 0 12.5C0 14.575 1.675 16.25 3.75 16.25C4.7375 16.25 5.625 15.8625 6.3 15.2375L15.2 20.4375C15.1375 20.7 15.1 20.975 15.1 21.25C15.1 23.2625 16.7375 24.9 18.75 24.9C20.7625 24.9 22.4 23.2625 22.4 21.25C22.4 19.2375 20.7625 17.6 18.75 17.6Z"
              fill="black"
            />
          </svg>
          <svg
            className="mx-2 my-auto"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.625 19.4375L12.5 19.5625L12.3625 19.4375C6.425 14.05 2.5 10.4875 2.5 6.875C2.5 4.375 4.375 2.5 6.875 2.5C8.8 2.5 10.675 3.75 11.3375 5.45H13.6625C14.325 3.75 16.2 2.5 18.125 2.5C20.625 2.5 22.5 4.375 22.5 6.875C22.5 10.4875 18.575 14.05 12.625 19.4375ZM18.125 0C15.95 0 13.8625 1.0125 12.5 2.6C11.1375 1.0125 9.05 0 6.875 0C3.025 0 0 3.0125 0 6.875C0 11.5875 4.25 15.45 10.6875 21.2875L12.5 22.9375L14.3125 21.2875C20.75 15.45 25 11.5875 25 6.875C25 3.0125 21.975 0 18.125 0Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div style={box}>
        <ul className="nav nav-tabs mb-2 row px-1" id="myTab" role="tablist">
          <li className="nav-item col-6 p-0" role="presentation">
            <button
              // style={{ width: "180px" }}
              className="nav-link active w-100"
              id="delivery-tab"
              data-bs-toggle="tab"
              data-bs-target="#delivery-tab-pane"
              type="button"
              role="tab"
              aria-controls="delivery-tab-pane"
              aria-selected="true"
            >
              배달
            </button>
          </li>
          <li className="nav-item col-6 p-0" role="presentation">
            <button
              // style={{ width: "180px" }}
              className="nav-link w-100"
              id="pickup-tab"
              data-bs-toggle="tab"
              data-bs-target="#pickup-tab-pane"
              type="button"
              role="tab"
              aria-controls="pickup-tab-pane"
              aria-selected="false"
            >
              포장
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="delivery-tab-pane"
            role="tabpanel"
            aria-labelledby="delivery-tab"
            tabindex="0"
          >
            <p><b>배달시간</b> 55분~60분</p>
            <p><b>배달요금</b> 3000원</p>
            <p><b>결제방법</b> 현장결제</p>
            <p><b>최소주문</b> 15,000원</p>
          </div>
          <div
            className="tab-pane fade"
            id="pickup-tab-pane"
            role="tabpanel"
            aria-labelledby="pickup-tab"
            tabindex="0"
          >
            ...
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-around m-1">
        <div className="col-5 m-0" style={box}>재주문 +1000</div>
        <div className="col-5 m-0" style={box}>가게, 원산지 정보</div>
      </div>
      {menus.map((item, i) => {
        return (
          <div className="d-flex" style={box}>
            <div className="col">
              <h2>{item.name}</h2>
              <small className="text-muted">{item.cal}kcal</small>
              <h3>{item.price}</h3>
            </div>
            <div className="col ms-auto">
              <img src={item.src} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Restaurant;
