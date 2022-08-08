import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <div>
      <a href='/'><div className='image'>
        <svg width="17" height="32" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 2.86061L14.4216 0L0 16L14.4216 32L17 29.1394L5.15681 16L17 2.86061Z" fill="#6B9BEA" />
        </svg>
      </div></a>

      <div className='Signup2'>
        <h1>회원가입</h1>
      </div>

      <div className='Nickname'>
        닉네임 <input id="Common" type='text' />
      </div>
    
      

      <div className='Id2'>
        ID <input id="Common1" type='text' />
        
      </div>
     

      <div className='Password2'>
        PASSWORD<input id="Common2" type='text' />
        
      </div>
      

      <div className='RePassword'>
        PW 확인
        <input id="Common3" type='text' />
        
      </div>
      

      <div className='Phonenumber'>
        휴대전화 번호
        <input id="Common4" type='text' />

      </div>
      

      <div className='Done'>
        <a href="SignupDone"><h3>회원가입 완료!</h3></a>
      </div>

    </div>
  )
}

export default Signup