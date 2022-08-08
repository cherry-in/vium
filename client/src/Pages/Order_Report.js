import React from 'react'
import Previous from '../Components/Previous'


const Order_Report = () => {
    return (
        <div>
            <Previous />
            <h1>주문 기록</h1>
            <br /><br />
            <h2>주문 접수 중</h2><br />
            <div className='Ordering'>
                <h2>우리동네 치킨</h2>
                <br />
                <h3>후라이드 치킨</h3>
                <p>옵션:뼈</p>
                <h3>총 금액: 19,000원</h3>
            </div><br />
            <h2>과거 주문목록</h2><br />
            <div className='Ordered'>
                <h2>우리동네 치킨</h2>
                <br />
                <h3>후라이드 치킨</h3>
                <p>옵션:순살</p>
                <h3>총 금액: 20,000원</h3>
            </div>


        </div>
    )
}

export default Order_Report