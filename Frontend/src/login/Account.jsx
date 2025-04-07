import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

function Account({setIsOpenLogin}) {
    const [showlogin, setShowlogin] = useState(true);


    return (
      <>
      {showlogin?
      <Login showlogin={showlogin} setIsOpenLogin={setIsOpenLogin} setShowlogin={setShowlogin} />:
      <SignUp showlogin={showlogin} setIsOpenLogin={setIsOpenLogin} setShowlogin={setShowlogin} />
      }
  
      
      </>
  )
}

export default Account