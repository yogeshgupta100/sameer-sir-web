import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="part4" style={{
            width:"100%",
            height:"350px",
            position:"relative",
        }}>
        <div className="full" style={{
        top:"1rem",
        width:"100%",
        height:"350px",
        position:"absolute",
        // textAlign:"center",
        backgroundColor:"rgba(217, 217, 217, 1)",
    }}><div className="container" style={{
        width:"80rem",
        lineHeight:"0",
        paddingTop:"6rem",
        paddingLeft:"8rem",
        textAlign:"left",
        paddingRight:"30rem",
    }}>
        <p style={{
            fontFamily:"inherit",
            fontWeight:"600"
        }}>Lorem ipsum</p>
        <h2 style={{
            lineHeight:"1",
            marginTop:"1.5rem"
        }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non impedit voluptates odit!</h2>
        <div className="paraBtn" style={{
            position:"relative",
            width:"100%",
            height:"8rem"
        }}>
        <div className="para pt-2" style={{
            fontWeight:"340",
            position:"absolute",
            marginTop:"1.5rem"
        }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ullam illum eos,</p>
        <p> voluptas fuga pariatur? Iste eos ea ducimus sit?</p>
        </div>
        </div>
    </div>
        </div>
          <div className="container" style={{
        backgroundColor:"rgba(238, 238, 238, 1)",
        width:"4rem",
        height:"4rem",
        borderRadius:"50%",
        position:"absolute",
        left:"12rem",
        bottom:"-3rem"
    }}>
          </div>
          <button style={{
            position:"absolute",
            right:"23rem",
            bottom:"5.4rem",
            width:"6rem",
            height:"2rem",
            border:"none",
            backgroundColor:"#000",
            color:"#fff",
            fontSize:"0.6rem"
        }}>TRY IT FOR FREE</button>
        </div>
        <div className="main_footer" style={{
          marginTop:"15rem",
          // marginLeft:"5rem",
          width:"100%",
          height:"27rem",
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between"
        }}>
          <div className="container part1" style={{
            display:"flex",
            alignContent:"start",
            flexDirection:"row",
            width:"30%",
          }}>
            <div className="col1" style={{
              marginRight:"4rem",
              lineHeight:"1"
            }}>
              <p>Company</p>
              <p>Company</p>
              <p>Company</p>
              <p>Company</p>
              <p>Company</p>
              <p>Company</p>
              <p>Company</p>
            </div>
            <div className="col2" style={{
              marginRight:"4rem",
              lineHeight:"1"
            }}>
              <p>Company</p>
              <p>Company</p>
              <p>Company</p>
              <p>Company</p>
              <p>Company</p>
              <p>Company</p>
              <p>Company</p>
            </div>
          </div>
          <div className=" container part2" style={{
            display:"flex",
            // overflow:'hidden',
            alignContent:"start",
            flexDirection:"column",
            width:"50%",
          }}>
            <div className="container" style={{
        width:"80rem",
        lineHeight:"0",
        paddingTop:"3rem",
        paddingLeft:"8rem",
        textAlign:"left",
        paddingRight:"30rem",
    }}>
        <p style={{
            fontFamily:"inherit",
            fontWeight:"600"
        }}>Lorem ipsum</p>
        <h2 style={{
            lineHeight:"1",
            marginTop:"1.5rem"
        }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non impedit voluptates odit!</h2>
        <div className="paraBtn" style={{
            position:"relative",
            width:"100%",
            height:"8rem"
        }}>
        <div className="para pt-2" style={{
            fontWeight:"340",
            position:"absolute",
            marginTop:"1.5rem"
        }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ullam illum eos,</p>
        <p> voluptas fuga pariatur? Iste eos ea ducimus sit?</p>
        </div>
        </div>
    </div>
          </div>
        </div>
    </>
  )
}

export default Footer