import React, { useState } from 'react'

function LoginIndex() {
  const [isLogin,setIsLogin]=useState('123')
  return (
    <div>
      <h1>{isLogin}</h1>
      <button onClick={()=>{
        setIsLogin('888')
      }}>1111</button>
    </div>
  )
}

export default LoginIndex
