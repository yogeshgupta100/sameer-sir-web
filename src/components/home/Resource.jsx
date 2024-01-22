import React from 'react'

const Resource = ({imageUrl1 , imageUrl2 , link}) => {
  return (
    <>
      <div className="resource-page" style={{display:"flex" , justifyContent:"center" , width:"100vw" , marginBottom:"10vw", marginLeft:"0"}}>
        <div className="resource-content2" style={{width:"100%"}}>
        <div className="resource-container" style={{display:"flex" , justifyContent:"space-between" , width:"100%" , margin:"0 0 2rem 1rem"}}>
          <div className="vid2" style={{width:"50%", backgroundImage:`url(${imageUrl1})`}}>
            </div>
        <div className="vid-content" style={{textAlign:"start" , width:"50%" , margin:"0 0"}}>
        <p style={{fontSize:"1.4rem" , width:"100%"}}>Typography Mastery: Crafting Beautiful</p><p style={{fontSize:"1.4rem" , width:"100%"}}> Text in Your Designs</p>
          <span style={{marginTop:"1.11vw" , minWidth:"100%"}}>Dive deep into the world of typography and elevate your design projects with expert tips and techniques.</span>
          <a href={link} className='purple-btn' style={{
            textDecoration:"none",
            border:"none",
            maxWidth:"70%",
            fontWeight:"500",  
            marginTop:"2.1vw",
            fontSize:"clamp(0.9rem , 1.5vw , 1rem)",
            whiteSpace:"nowrap",
          }}>Explore more</a>
        </div>
        </div>
        <div className="resource-container" style={{display:"flex" , justifyContent:"space-between" , width:"100%" , marginBottom:"2rem"}}>
        <div className="vid-content" style={{textAlign:"start" , minWidth:"45%" , marginRight:"0"}}>
        <p style={{fontSize:"1.4rem" , width:"100%"}}>Typography Mastery: Crafting Beautiful</p><p style={{fontSize:"1.4rem" , width:"100%"}}> Text in Your Designs</p>
          <span style={{marginTop:"1.11vw" , minWidth:"100%"}}>Dive deep into the world of typography and elevate your design projects with expert tips and techniques.</span>
          <a href={link} className='purple-btn' style={{
            textDecoration:"none",
            border:"none",
            maxWidth:"70%",
            fontWeight:"500",  
            marginTop:"2.1vw",
            fontSize:"clamp(0.9rem , 1.5vw , 1rem)",
            whiteSpace:"nowrap",
          }}>Explore more</a>
        </div>
          <div className="vid2" style={{width:"50%", backgroundImage:`url(${imageUrl2})`}}>
            </div>
        </div>
        </div>
      <div className='resource-content1' style={{width:"90%"}}>
        <div className="vid1" style={{backgroundImage:`url(${imageUrl1})`}}></div>
        <div className="vid2" style={{position:"relative" , backgroundImage:`url(${imageUrl2})`}}></div>
        <div className="vid-content" style={{minWidth:"40%" , margin:"3rem 0 0 4vw"}}>
          <p>Typography Mastery: Crafting Beautiful</p><p> Text in Your Designs</p>
          <span style={{paddingRight:"1rem" , marginTop:"1vw" , minWidth:"100%"}}>Dive deep into the world of typography and elevate your design projects with expert tips and techniques.</span>
          <a href={link} className='purple-btn' style={{
        textDecoration:"none",
        border:"none",
        maxWidth:"12.1vw",
        fontWeight:"500",  
        marginTop:"2rem",
        fontSize:"clamp(0.8rem , 1.5vw , 1rem)",
        whiteSpace:"nowrap",
      }}>Explore more</a>
        </div>
        </div>
      </div>
    </>
  )
}

export default Resource

