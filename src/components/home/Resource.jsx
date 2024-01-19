import React from 'react'

const Resource = ({imageUrl1 , imageUrl2 , link}) => {
  return (
    <>
      <div className="resource-page" style={{display:"flex" , justifyContent:"center" , width:"100%" , marginBottom:"10vw", marginLeft:"0"}}>
        <div className="resource-content2">
        <div className="resource-container" style={{display:"flex" , justifyContent:"space-between" , width:"100vw" , marginBottom:"2rem"}}>
        <div className="vid1" style={{ width:"50%" , backgroundImage:`url(${imageUrl1})` , marginLeft:"1rem"}}>
          </div>
        <div className="vid-content" style={{textAlign:"start" , width:"100%" , margin:"auto" }}>
          <h4 style={{fontSize:"clamp(1.2rem , 2vw , 1.8rem)"}}>Typography Mastery: Crafting Beautiful</h4><h4> Text in Your Designs</h4>
          <span>Dive deep into the world of typography and elevate your design</span><span>projects with expert tips and techniques.</span>
          <a href={link} className='purple-btn' style={{
        textDecoration:"none",
        border:"none",
        maxWidth:"70%",
        fontWeight:"500",  
        marginTop:"2.1vw",
        fontSize:"clamp(0.8rem , 1.5vw , 1rem)",
        whiteSpace:"nowrap",
      }}>Explore more</a>
        </div>
        </div>
        <div className="resource-container" style={{display:"flex" , justifyContent:"space-between" , width:"100%"}}>
        <div className="vid-content" style={{margin:"auto 0 auto 1rem" , textAlign:"start"}}>
          <h4 style={{fontSize:"clamp(1.2rem , 2vw , 1.8rem)" , lineHeight:"1.3rem"}}>Typography Mastery: Crafting Beautiful</h4>
          <h4> Text in Your Designs</h4>
          <p>Dive deep into the world of typography and elevate your design</p><p> projects with expert tips and techniques.</p>
          <a href={link} className='purple-btn' style={{
            textDecoration:"none",
            border:"none",
            maxWidth:"70%",
            fontWeight:"500",  
            marginTop:"2.1vw",
            fontSize:"clamp(0.8rem , 1.5vw , 1rem)",
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
        <div className="vid-content" style={{width:"50%" , margin:"3rem 0 0 4vw"}}>
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

