import React from 'react'
import Calories from '../Components/Calories'
import Footer from '../Components/Footer'
import Previous from '../Components/Previous'
import StoreLists from '../Components/StoreList'

const StoreList = () => {
  return (
    <div>
      <Previous />
      <Calories />
      <StoreLists />
      <Footer />
    </div>
  )
}

export default StoreList