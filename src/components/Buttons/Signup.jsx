import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <NavLink to={"/signup"} style={{textDecoration:"none"}}>
      <button
        type="button"
        className="button"
        id='button'
        style={{
          maxWidth:"100vw",
          borderRadius: "0.66vw",
          border: "0.076vw solid #B86CD2",
          margin:"0 1.11vw 0 0",
          fontWeight:"500",
          fontSize:"1.1544vw",
          aspectRatio:"3/1",
          // padding:"0.4rem 1vw",
          padding:"0.4vw 1vw"
        }}
      >
        <p style={{fontSize:"1.154vw", margin:"0"}}>Sign in</p>
      </button>
      </NavLink>
    </>
  )
}

export default Signup