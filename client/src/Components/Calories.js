import React from "react";

const Calories = ({color}) => {
  const style = {
    backgroundColor: color||"black",
    boxShadow: "0px 5px rgb(0,0,0,0.2)",
    borderRadius: "13px",
  }
  return (
      <div style={style} className="text-primary pt-3 px-2 my-2">
        <span>오늘 소비한 칼로리</span>
        <h1>480kcal</h1>
      </div>
  );
};

export default Calories;
