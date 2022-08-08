import React from "react";

function FoodCategory() {
  /* Ellipse 14 */
  const circle = {
    width: "65px",
    height: "65px",
    background: "#D9D9D9",
    borderRadius: "50px",
    textAlign:"center",
    paddingTop:"20px"
  };

  const category = ["추천", "한식", "샐러드", "야식", "치킨", "피자", "중식", "기타"];
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {category.map((item, i) => {
        return (
          <div className="m-2" key={i} style={circle}>
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default FoodCategory;
