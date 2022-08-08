import React from 'react'
import Cart from '../Components/Cart'
import Previous from '../Components/Previous'
import "./Jangbaguni_Nofood.css"

const Jangbaguni_Nofood = () => {
  return (
    <div>
      <div className='Previous'>
        <Previous />
        {/* 왜 a 태그가 모서리에 걸리지..? 뭐가 원인이지? Cart는 잘 되는데... */}
      </div>
      <div className='Jangbaguni'>
        <h1>장바구니</h1>
      </div>
      <div className='Cart'>
        <Cart />
      </div>
      <br /><br /><br />
      <div className='Nofood'>
        <p>아직 담은 음식이 없어요!</p>
      </div>

    </div>
  )
}

export default Jangbaguni_Nofood