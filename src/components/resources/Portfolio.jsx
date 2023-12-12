import React from 'react'
import Heading from '../aboutus/Heading'

const Portfolio = () => {
  return (
    <>
      <div className="container" style={{
        padding:"6.66vw 0 0"
      }}>
      <Heading content={"Portfolio"} left={"30%"}/>
      </div>
      <div style={{
        backgroundImage:`url(${"/assets/Frame338.png"})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"contain",
        width:"100%",
        margin:"6.66vw 0",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position:"relative",
        height:"400vh"
      }}>
      </div>
    </>
  )
}

export default Portfolio