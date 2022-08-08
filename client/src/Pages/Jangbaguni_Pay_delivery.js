import React from 'react'
import Cart from '../Components/Cart'
import Previous from '../Components/Previous'

const Jangbaguni_Pay_delivery = () => {
  return (
    <div>
        <Previous />
        <h1>장바구니</h1>
        <Cart /><br />
        <div className='total_payment'>
            <h2>이번 달 총 결제금액은</h2>
            <h2>118,500원 입니다</h2>
        </div><br />
        <div className='list'>
            <h3>후라이드 치킨</h3>
            <p>배달</p>
            <p>옵션: 뼈</p>
            <h3>총 금액:19,000원</h3>
        </div><br />
        <a href='/'>결제</a>

    </div>
  )
}

export default Jangbaguni_Pay_delivery