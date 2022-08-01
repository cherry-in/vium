import React from 'react'
import Cart from '../Components/Cart'
import Previous from "../Components/Previous"
import Share from "../Components/Share"
import Like from '../Components/Like'

const Restaurant = () => {
  return (
    <div>
        <Previous />
        <h1>우리동네 치킨</h1>
        <Cart />
        <Share />
        <Like />
        <a href='restaurant'>배달</a>
        <a href='restaurant_Pickup'>포장</a>
        <p>배달시간: 55분~60분</p>
        <p>배달요금: 3000원</p>
        <p>결제방법: 현장결제</p>
        <p>최소주문: 15,000원</p>
        <p>재주문 +1000</p>
        <p>가게, 원산지 정보</p>
        <br />
        <h2>후라이드 치킨</h2>
        <p>1975kcal</p>
        <p>16.000원</p>
        <br />
        <h2>양념치킨</h2>
        <p>2130kcal</p>
        <p>17,000원</p>
    </div>
  )
}

export default Restaurant