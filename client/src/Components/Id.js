import React from 'react'

const Id = () => {
  return (
    <div>
      <div className="ID">ID</div>
      <input id="input1" placeholder="아이디를 입력하시오.." type='text' />
      <input type='submit' value='제출하기'></input>
      <br />
      <div className='Password'>Password</div>
      <input id="input2" placeholder="비밀번호를 입력하시오.." type='text' />
      <input type='submit' value='제출하기'></input>

    </div>
  )
}

export default Id