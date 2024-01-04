import React from 'react'
import Heading from '../aboutus/Heading'

const Resource = () => {
  return (
    <>
      <div className="resource-page container">
        <div className="resource-content2">
        <div className="resource-container" style={{display:"flex" , justifyContent:"space-between" , width:"100vw"}}>
        <div className="vid1" style={{ width:"50%" }}>
          </div>
        <div className="vid-content" style={{textAlign:"start" , width:"100%" , margin:"auto 0.4rem"}}>
          <h4 style={{fontSize:"clamp(1.2rem , 2vw , 1.8rem)"}}>Typography Mastery: Crafting Beautiful Text in Your Designs</h4>
          <span>Dive deep into the world of typography and elevate your design projects with expert tips and techniques.</span>
          <button className='purple-btn' style={{
        textDecoration:"none",
        border:"none",
        maxWidth:"70%",
        fontWeight:"500",  
        marginTop:"2.1vw",
        fontSize:"clamp(0.8rem , 1.5vw , 1rem)",
        whiteSpace:"nowrap",
      }}>Explore more</button>
        </div>
        </div>
        <div className="resource-container" style={{display:"flex" , justifyContent:"space-between"}}>
        <div className="vid-content" style={{margin:"0" , textAlign:"start" , marginRight:"auto 0"}}>
          <h4 style={{fontSize:"clamp(1.2rem , 2vw , 1.8rem)"}}>Typography Mastery: Crafting Beautiful Text in Your Designs</h4>
          <span>Dive deep into the world of typography and elevate your design projects with expert tips and techniques.</span>
          <button className='purple-btn' style={{
            textDecoration:"none",
            border:"none",
            maxWidth:"70%",
            fontWeight:"500",  
            marginTop:"2.1vw",
            fontSize:"clamp(0.8rem , 1.5vw , 1rem)",
            whiteSpace:"nowrap",
          }}>Explore more</button>
        </div>
          <div className="vid2" style={{width:"50%" }}>
            </div>
        </div>
        
        </div>
        <div className='resource-content1'>
        <div className="vid1"></div>
        <div className="vid2" style={{position:"relative"}}></div>
        <div className="vid-content" style={{width:"100%" , marginRight:"0"}}>
          <h4>Typography Mastery: Crafting Beautiful Text in Your Designs</h4>
          <span style={{paddingRight:"3rem" , marginTop:"0.6rem"}}>Dive deep into the world of typography and elevate your design projects with expert tips and techniques.</span>
          <button className='purple-btn' style={{
        textDecoration:"none",
        border:"none",
        maxWidth:"12.1vw",
        fontWeight:"500",  
        marginTop:"2.1vw",
        fontSize:"clamp(0.8rem , 1.5vw , 1rem)",
        whiteSpace:"nowrap",
      }}>Explore more</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Resource

