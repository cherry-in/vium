import React from 'react'
import Id from '../Components/Id'
import Nickname from '../Components/Nickname'
import Phonenumber from '../Components/Phonenumber'
import Previous from "../Components/Previous"
import RePassword from '../Components/RePassword'
import Signup2 from '../Components/Signup2'
import SignupFooter from '../Components/SignupFooter'

const Signup = () => {
  return (
    <div>
      <Previous />
      <Signup2 />
      <Nickname />
      <Id />
      <RePassword />
      <Phonenumber />
      <SignupFooter />

    </div>
  )
}

export default Signup