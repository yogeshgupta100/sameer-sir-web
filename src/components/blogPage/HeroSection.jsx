import React from 'react'
import Small_nav from '../Small_nav'

const HeroSection = () => {
  return (
    <>
      <div className="full-body" style={{position:"relative" , width:"100vw" }}>
      <Small_nav/>
      <div className="blog-hero-text container" style={{
        display:"flex",
        justifyContent:"start",
        alignItems:"center",
        height:"70vh", 
      }}>
        <div className="content" style={{
            display:"block",
            width:"70%",
            marginLeft:"4rem",
        }}>
        <h4 style={{
            color: "#B46BD1",
            fontSize:"clamp(1.5rem , 5vw , 3rem)",
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
        }}>Unveiling the World of Blogs: A Journey into Online Learning Program </h4>
        <p style={{
            color: "#B46BD1",
            fontFamily: "Raleway",
            fontSize: "clamp(0.5rem , 5vw , 1.2rem)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.875rem",
            letterSpacing: "0.075rem",
        }}>Provide a versatile and dynamic means of sharing information, expressing thoughts, and connecting with an audience.</p>
      </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection