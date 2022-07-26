import React from "react";

function FoodCategory() {
  /* Ellipse 14 */
  const circle = {
    width: "65px",
    height: "65px",
    background: "#D9D9D9",
  };

  const category = ["추천", "한식", "샐러드", "야식", "치킨", "피자", "중식"];
  return (
    <div>
      {category.map((item, i) => {
        return (
          <div key={i} style={circle}>
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default FoodCategory;
