import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='signup-main'>
      <a href={"/signup"} style={{textDecoration:"none"}}>
      <div className='signup-vector' style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "2px",
								fontSize: "1.2rem",
								background: "#fff",
								color: "white",
								borderRadius: "50%",
								height: "30px",
								width: "30px",
								cursor: "pointer"
							}}>
								<img src='/assets/Group.png' />
							</div>
      <button
        type="button"
        className="button"
        id='button'
        style={{
          width:"100%",
          borderRadius: "0.66vw",
          border: "0.076vw solid #B86CD2",
          // margin:"0 1.11vw 0 0",
          fontWeight:"500",
          fontSize:"1.1544vw",
          aspectRatio:"4/1.9",
          padding:"0.4vw 1vw",
          height:"100%"
        }}
      >
        <p style={{fontSize:"1.154rem", margin:"0"}}>Sign in</p>
      </button>
      </a>
    </div>
  )
}

export default Signup