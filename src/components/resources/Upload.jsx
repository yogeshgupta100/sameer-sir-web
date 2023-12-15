import React from 'react'
import Heading from '../aboutus/Heading'
import Blog from './Blog'

const Upload = () => {
  return (
    <>
      <div className="banner-section">
        <div style={{
          color:"#fff",
          textAlign:"center",
          fontFamily:"Open Sans",
          fontSize:"clamp(1.5rem , 1.88vw , 2rem)",
          fontWeight:"700",
          lineHeight:"3vw",
          maxWidth:"44.4vw",
        }}>Want To Upload Your Assets And Become Part Of Our Resource Community
        <div className="upload-btn">
        <button id='button' className='btn' style={{borderRadius:"0.75rem", marginTop:"1rem"}}>Upload now</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Upload