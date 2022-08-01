import React from 'react'
import Id from '../Components/Id'
import Previous from "../Components/Previous"

const Signup = () => {
  return (
    <div>
      <Previous />
      <h1>회원가입</h1>
      닉네임 <input type='text'/>
            <input type='submit' value='제출하기'></input>
            <br />
      <Id />
      PW 확인
            <input type='text'/>
            <input type='submit' value='제출하기'></input>
            <br />
      휴대전화 번호
            <input type='text'/>
            <input type='submit' value='제출하기'></input>
            <br />
      <h1>회원가입 완료!</h1>

    </div>
  )
}

export default Signup