import React from 'react'
import Cart from '../Components/Cart'
import Previous from "../Components/Previous"
import Share from "../Components/Share"
import Like from '../Components/Like'

const Restaurant_Pickup = () => {
  return (
    <div>
        <Previous />
        <h1>우리동네 치킨</h1>
        <Cart />
        <Share />
        <Like />
        <a href='restaurant'>배달</a>
        <a href='restaurant_Pickup'>포장</a>
        <p>포장시간: 포장 예상 시간</p>
        <p>할인금액: 할인 금액</p>
        <p>결제방법: 현장결제</p>
        <p>가게위치: 가게위치</p>
        <br />
        <p>(임시)지도 사진 붙이는 곳</p>
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

export default Restaurant_Pickup