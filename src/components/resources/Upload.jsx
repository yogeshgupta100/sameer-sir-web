import React from 'react'
import Heading from '../aboutus/Heading'
import Blog from './Blog'

const Upload = () => {
  return (
    <>
      <div className="banner-section" style={{width:"100vw" , padding:"1rem auto" , marginBottom:"7vw"}}>
        <div style={{
          color:"#fff",
          textAlign:"center",
          fontFamily:"Open Sans",
          fontSize:"clamp(1rem , 2.5vw , 2rem)",
          fontWeight:"700",
          lineHeight:"150%",
          width:"clamp(100%, 2vw , 60%)",
          display:"flex",
          flexDirection:"column",
          fontStyle:"normal"
        }}><span>Want To Upload Your Assets And Become Part Of</span><span>Our Resource Community</span> 
        <div className="upload-btn">
        <button
									type="button"
									className="btn"
                  id='button'
									style={{
									display: "inline-block",
									borderRadius: "0.75rem",
									border: "1.1px solid #fff",
									padding: "0.5rem 1rem",
									fontWeight: "500",
									fontSize: "clamp(0.8rem, 1.5vw, 1.2rem)",
									whiteSpace: "nowrap",
									width: "auto",
									maxWidth: "100%",
									boxSizing: "border-box",
                  marginTop:"1.5rem"
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