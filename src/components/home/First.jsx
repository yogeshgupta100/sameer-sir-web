import React from 'react'
import { NavLink } from 'react-router-dom'

const First = () => {
  return (
    <>
    <div className="first" style={{
      width:"100%",
      minHeight:"55vw",
      position:"relative",
      overflow:"hidden",
      paddingRight:"0",
    }}>
      <div className="first-main" style={{
        width:"100%",
        minHeight: "33.3vw",
        opacity: "0.8",
        background: "linear-gradient(115deg, #58007A 2.06%, #300066 68.61%, #910095 110.31%, #CE00B5 156.01%)",
        position:"absolute",
        bottom:"0",
      }}>
      </div>
      <div className="container" style={{
        background: "linear-gradient(254deg, #6C0082 0.31%, #44006F 46.97%, #7A0089 114.38%)",
        width: "84vw",
        height: "44vw",
        flexShrink: "0",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        position:"relative",
        top:"0vw",
        display:"flex",
        overflow:"hidden",
        padding:"0",
      }}>
        <div className="first-content" style={{
          maxWidth:"44vw",
          minHeight:"33vw",
          margin:"6.66vw 4.44vw ",
          color:"#fff",
          fontStyle:"normal",
          fontFamily:"Open Sans" 
        }}>
          <p style={{ fontSize:"clamp(0.6rem , 2vw , 1.1rem)" , marginBottom:"0"}}>Join the Creative Revolution</p>
          <h4 style={{fontSize:"2.33vw" , lineHeight:"130%" , width:"90%" , fontWeight:"700" , color:"#fff"}}>Your lifetime Access to our Design Community Membership Starts Here!</h4>
          <a href='#courses' style={{textDecoration:"none"}}>
          <button type="button" className="btn" style={{borderRadius: "0.72vw",
            fontSize:"1.11vw",
            fontWeight:"500",
            width:"fit-content",
            minHeight:"4vw",
            padding:"0 1.44vw",
            margin:"2.22vw 0"
            }}>
              <span>Explore Courses</span>
        </button>
          </a>
        <div className="first-count" style={{
          maxWidth:"100vw",
          minHeight:"3vw",
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          alignItems:"flex-end",
        }}>
          <div className="content" style={{minHeight:"100%"}}>
              <h3 style={{
              fontSize:"3.33vw",
              fontWeight:"700",
              color:"#fff"
            }}>500+ </h3>
              <p style={{
                width:"11vw",
                fontSize:"clamp(0.7rem , 1.1vw , 1rem)",
                fontWeight:"400",
              }}>Experts working across the globe!</p>
          </div>
          <div className="content" style={{minHeight:"100%"}}>
            <h3 style={{
              fontSize:"3.33vw",
              fontWeight:"700",
              color:"#fff"
            }}>2000+</h3>
              <p style={{
                width:"12vw",
                fontSize:"clamp(0.7rem , 1.1vw , 1rem)",
                fontWeight:"400"
              }}>Community members, growing as you read!</p>
          </div>
          <div className="content" style={{minHeight:"100%"}}>
            <h3 style={{
              fontSize:"3.33vw",
              fontWeight:"700",
              color:"#fff"
            }}>2000+</h3>
              <p style={{
                width:"12vw", 
                fontSize:"clamp(0.7rem , 1.1vw , 1rem)",
                fontWeight:"400"
              }}>Community members, growing as you read!</p>
          </div>
        </div>
        </div>
        {/* <div className="images" style={{display:"flex" , position:"relative" , alignItems:"end" }}> */}
          <div className="man" style={{
            // backgroundImage:`url(${"/assets/home-banner.png"})`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"contain",
            minWidth: "35vw",
            maxHeight: "100%",
            flexShrink: "0",
            display:"flex",
            alignItems:"flex-end",
          }}>
            <img src='/assets/home-banner.png' style={{width:"35vw" , height:"60%"}}/>
          </div>
        </div>
      </div>
    {/* </div> */}
    </>
  )
}

export default First