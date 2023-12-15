import React from 'react'
import Header from '../Header'
import LandingPage from '../home/LandingPage'
import Resources from '../home/Resource'
import Heading from '../aboutus/Heading'
import DesignCard from './DesignCard'
import Blog from './Blog'
import Small_nav from '../Small_nav';
import Portfolio from './Portfolio'
import Upload from './Upload'

const Resource = ({designCardData}) => {
  return (
    <>
      <div className="banner" style={{
          boxShadow: "0 0.069vw 0.555vw 0 rgba(0, 0, 0, 0.25)",
          position:"sticky"
        }}>
      <Header/>
        </div>
      <div className="full-body" style={{position:"relative" , maxWidth:"100vw" , marginBottom:"31.08vw"}}>
        <Small_nav/>
        <LandingPage/>
        <div
        className=" about-first2"
        style={{ position: "absolute", bottom: "-19.98vw" , display:"flex", alignItems:"center" , minHeight:"27.75vw" , paddingLeft:"3.33vw"}}
      >
        <div
          className="container about-content"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" , gap:"1.11vw" , justifyContent:"center", height:"19.98vw" , alignContent:"center"}}
        >
          <div className="part1" style={{width:"100%", textAlign:"center" , fontFamily:"Open Sans" , borderRight:"0.069vw solid #CDCDCD" , paddingRight:"3.33vw"}} >
            <h3 style={{
              textAlign: "center",
              fontSize:"1.443vw",
              fontWeight:"600",
              letterSpacing:"0.069vw",
              color:"#B46BD1"
            }}>Course description</h3>
            <p style={{
              fontSize:"0.9435vw",
              color:"#3D3D3D",
              lineHeight:"1.776vw"
            }}>
              Welcome to the enchanting world of "Graphic Design Alchemy," where
              creativity knows no bounds, and the ordinary transforms into
              extraordinary. it's a journey of  
              self-discovery, artistic
              expression
            </p>
          </div>
          <div className="part2" style={{
              textAlign: "center",
              borderRight:"0.069vw solid #CDCDCD",
            }}>
            <h3 style={{
              textAlign: "center",
              fontSize:"1.443vw",
              fontWeight:"600",
              letterSpacing:"0.069vw",
              color:"#B46BD1"
            }}>Course duration</h3>
            <p style={{
              fontSize:"0.9435vw",
              color:"#3D3D3D",
              lineHeight:"1.776vw"
            }}>
              6 months
            </p>
            <p style={{
              fontSize:"0.9435vw",
              color:"#3D3D3D",
              lineHeight:"1.776vw"
            }}>
              2 hours a day 
            </p>
          </div>
          {/* <span className="v-line" ></span> */}
          <div className="part3" style={{
              textAlign: "center"
            }}>
            <h3 style={{
              textAlign: "center",
              fontSize:"1.443vw",
              fontWeight:"600",
              letterSpacing:"0.069vw",
              color:"#B46BD1"
            }}>Next branch</h3>
            <p style={{
              fontSize:"0.9435vw",
              color:"#3D3D3D",
              lineHeight:"1.776vw"
            }}>
              weekend
            </p>
            <p style={{
              fontSize:"0.9435vw",
              color:"#3D3D3D",
              lineHeight:"1.776vw"
            }}>
              sat & sun 
            </p>
          </div>
        </div>
      </div>
      </div>
      <Resources/>
      <div className="flip-resources" style={{marginTop:"16.65vw"}}>
        <Resources/>  
      </div>
      <div className="container" style={{marginTop:"16.65vw"}} id='blogs'>
        <Heading content={"Blogs"} left={"30.5%"} />
        <div className="blogs-container container" style={{width:"95%", paddingTop:"2rem"}}><Blog/></div>
      </div>
      <Upload/>
      <Portfolio/>
      <Upload/>
        <div className="container" style={{marginTop:"9.99vw"}}>
        <Heading content={"Design Challenges"} left={"30.5%"} />
        <div className="DesignCard container" style={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          justifyContent:"center",
          gap:"2.22vw"
        }}>
          {designCardData.map((currEle) => {
      return(
          <DesignCard currEle={currEle}/>
        );
        })
      }
        </div>
        </div>
    </>
  )
}

export default Resource