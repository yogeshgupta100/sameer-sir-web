import React from 'react'
import Heading from '../aboutus/Heading'
import Blog from './Blog'

const Upload = () => {
  return (
    <>
      <div className="banner-section" style={{width:"100vw" , padding:"1rem auto"}}>
        <div style={{
          color:"#fff",
          textAlign:"center",
          fontFamily:"Open Sans",
          fontSize:"clamp(1rem , 1.5vw , 1.5rem)",
          fontWeight:"700",
          lineHeight:"1.3",
          maxWidth:"44.4vw",
        }}>Want To Upload Your Assets And Become Part Of Our Resource Community
        <div className="upload-btn">
        {/* <button id='button' className='btn' style={{borderRadius:"0.75rem", marginTop:"1rem" , fontSize:"clamp(0.8rem , 1.5vw , 1.2rem)" , width:"auto" , whiteSpace:"nowrap"}}>Upload now</button> */}
        <button
									type="button"
									className="btn"
                  id='button'
									style={{
									display: "inline-block",
									borderRadius: "0.75rem",
									border: "1.1px solid #fff",
									// marginRight: "1rem",
									padding: "0.5rem 1rem",
									fontWeight: "500",
									fontSize: "clamp(0.8rem, 1.5vw, 1.2rem)",
									whiteSpace: "nowrap",
									width: "auto",
									maxWidth: "100%",
									boxSizing: "border-box",
									// height:"2.5rem",
                  marginTop:"1rem"
									}}
								>
									Upload now
								</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Upload