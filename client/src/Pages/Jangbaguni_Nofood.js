import React from 'react'
import Cart from '../Components/Cart'
import Previous from '../Components/Previous'

const Jangbaguni_Nofood = () => {
  return (
    <div>
        <Previous />
        <h1>장바구니</h1>
        <Cart />
        <br /><br /><br />
        <p>아직 담은 음식이 없어요!</p>

    </div>
  )
}

export default Jangbaguni_Nofood