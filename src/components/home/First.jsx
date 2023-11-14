import React from 'react'

const First = () => {
  return (
    <>
    <div className="first" style={{
      width:"100%",
      height:"50rem",
      position:"relative",
      overflow:"hidden",
      paddingRight:"0"
    }}>
      <div className="first-main" style={{
        width:"100%",
        height: "30rem",
        flexShrink: 0,
        opacity: "0.8",
        background: "linear-gradient(115deg, #58007A 2.06%, #300066 68.61%, #910095 110.31%, #CE00B5 156.01%)",
        position:"absolute",
        bottom:"0",
      }}>
      </div>
      <div className="container" style={{
        backgroundImage: `url(${"/assets/home-bg-img.jpg"})`,
        width: "76rem",
        height: "40rem",
        flexShrink: "0",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        position:"absolute",
        top:"3.5rem",
        display:"flex",
        overflow:"hidden",
      }}>
        <div className="first-content" style={{
          width:"40rem",
          height:"30rem",
          margin:"6rem 4rem",
          color:"#fff",
          fontStyle:"normal",
          fontFamily:"Open Sans" 
        }}>
          <p style={{ fontSize:"1rem" , lineHeight:"2rem" , marginBottom:"0"}}>Join the Creative Revolution</p>
          <h4 style={{fontSize:"2rem" , lineHeight:"130%" , width:"90%" , fontWeight:"700"}}>Your lifetime Access to our Design Community Membership Starts Here!</h4>
          <button type="button" className="btn" style={{borderRadius: "0.6rem",
            border: "1.5px solid #FFF",
            fontSize:"1rem",
            fontWeight:"500",
            width:"auto",
            padding:"0 1.3rem",
            marginTop:"2rem"
            }}>
              Explore Courses
        </button>
        <div className="first-count" style={{
          width:"100%",
          height:"40%",
          display:"grid",
          gridTemplateColumns:"repeat(3,auto)",
          alignItems:"end"
        }}>
          <div className="content">
              <h3 style={{
              fontSize:"3rem",
              fontWeight:"700"
            }}>500+</h3>
              <p style={{
                width:"10rem",
                fontSize:"1rem",
                fontWeight:"400"
              }}>Experts working across the globe!</p>
          </div>
          <div className="content">
            <h3 style={{
              fontSize:"3rem",
              fontWeight:"700"
            }}>2000+</h3>
              <p style={{
                width:"11rem",
                fontSize:"1rem",
                fontWeight:"400"
              }}>Community members, growing as you read!</p>
          </div>
          <div className="content">
            <h3 style={{
              fontSize:"3rem",
              fontWeight:"700"
            }}>2000+</h3>
              <p style={{
                width:"11rem",
                fontSize:"1rem",
                fontWeight:"400"
              }}>Community members, growing as you read!</p>
          </div>
        </div>
        </div>
        {/* <div className="images" style={{display:"flex" , position:"relative" , alignItems:"end" }}> */}
          {/* <div className="man" style={{
            backgroundImage:`url(${"/assets/home-banner.png"})`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            width: "19rem",
            height: "25rem",
            flexShrink: "0",
            position:"absolute",
            left:"7rem",
            bottom:"-1.5rem"
          }}></div> */}
          <span className="home-banner" style={{
            backgroundImage:`url(${"/assets/home-banner.png"})`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"contain",
            width: "40%",
            height: "55%",
            position:"absolute",
            bottom:"0",
            right:"-1rem",
            marginLeft: "clamp(2rem, 10vw, 7rem)",
            marginTop: "clamp(2rem, 10vw, 7rem)",
        }}></span>
        </div>
      </div>
    {/* </div> */}
    </>
  )
}

export default First