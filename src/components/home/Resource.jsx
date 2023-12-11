import React from 'react'
import Heading from '../aboutus/Heading'

const Resource = () => {
  return (
    <>
      <div className="resource-page">
        <Heading content="Unlock a world of knowledge with our resource library" left="20.5%"/>
        <div className="resource-content">
        <div className="vid1" style={{backgroundImage:`url(${"/assets/resources-img1.jpeg"})`}}></div>
        <div className="vid2"></div>
        <div className="vid-content">
          <h4>Typography Mastery: Crafting Beautiful Text in Your Designs</h4>
          <p>Dive deep into the world of typography and elevate your design projects with expert tips and techniques.</p>
          <button className='purple-btn' style={{
        textDecoration:"none",
        border:"none",
        width:"10rem",
        fontWeight:"500",
        padding:"1.1rem",
        marginTop:"1.8rem"
      }}>Explore more</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Resource