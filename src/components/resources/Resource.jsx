import React from 'react'
import Header from '../Header'
import { NavLink } from 'react-router-dom'
import LandingPage from '../home/LandingPage'
import Resources from '../home/Resource'
import Heading from '../aboutus/Heading'
import DesignCard from './DesignCard'

const Resource = ({designCardData}) => {
  return (
    <>
      <div className="banner" style={{
          boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.25)",
          position:"sticky"
        }}>
      <Header/>
        </div>
      <div className="full-body" style={{position:"relative" , width:"100vw" , marginBottom:"28rem"}}>
      <div className="small-nav container" style={{position:"absolute" , top:"0" , left:"7%" , zIndex:"10"}}>
          <ul
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              textDecoration: "none",
              alignItems: "center",
              listStyleType:"none",
            }}
          >
            <li style={{ textDecoration: "none" }}>
              <NavLink
                to={"/all"}
                style={{
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    fontFamily: "Raleway",
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "medium",
                    fontStyle: "normal",
                    textAlign: "center",
                  }}>
                  All
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/graphic "}
                style={{
                  textDecoration: "none",
                }}
              >
                
                <span
                  style={{
                    cursor: "pointer",
                    fontFamily: "Raleway",
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "medium",
                    fontStyle: "normal",
                    textAlign: "center",
                  }}
                >
                  Graphic Design 
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/ui/ux"}
                style={{
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    fontFamily: "Raleway",
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "medium",
                    fontStyle: "normal",
                    textAlign: "center",
                  }}
                >
                  Ui/UX Design
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/virtualReality"}
                style={{
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    fontFamily: "Raleway",
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "medium",
                    fontStyle: "normal",
                    textAlign: "center",
                  }}
                >
                  Virtual Reality
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/all"}
                style={{
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    fontFamily: "Raleway",
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "medium",
                    fontStyle: "normal",
                    textAlign: "center",
                  }}
                >
                  Art
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <LandingPage/>
        <div
        className=" about-first2"
        style={{ position: "absolute", bottom: "-18rem" , display:"flex", alignItems:"center" , height:"25rem" , paddingLeft:"3rem"}}
      >
        <div
          className="container about-content"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" , gap:"1rem" , justifyContent:"center", height:"18rem" , alignContent:"center"}}
        >
          <div className="part1" style={{width:"100%", textAlign:"center" , fontFamily:"Open Sans" , borderRight:"1px solid #CDCDCD" , paddingRight:"3rem"}} >
            <h3 style={{
              textAlign: "center",
              fontSize:"1.3rem",
              fontWeight:"600",
              letterSpacing:"1px",
              color:"#B46BD1"
            }}>Course description</h3>
            <p style={{
              fontSize:"0.85rem",
              color:"#3D3D3D",
              lineHeight:"1.6rem"
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
              borderRight:"1px solid #CDCDCD",
            }}>
            <h3 style={{
              textAlign: "center",
              fontSize:"1.3rem",
              fontWeight:"600",
              letterSpacing:"1px",
              color:"#B46BD1"
            }}>Course duration</h3>
            <p style={{
              fontSize:"0.85rem",
              color:"#3D3D3D",
              lineHeight:"1.6rem"
            }}>
              6 months
            </p>
            <p style={{
              fontSize:"0.85rem",
              color:"#3D3D3D",
              lineHeight:"1.6rem"
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
              fontSize:"1.3rem",
              fontWeight:"600",
              letterSpacing:"1px",
              color:"#B46BD1"
            }}>Next branch</h3>
            <p style={{
              fontSize:"0.85rem",
              color:"#3D3D3D",
              lineHeight:"1.6rem"
            }}>
              weekend
            </p>
            <p style={{
              fontSize:"0.85rem",
              color:"#3D3D3D",
              lineHeight:"1.6rem"
            }}>
              sat & sun 
            </p>
          </div>
        </div>
      </div>
      </div>
      <Resources/>
      <div className="flip-resources" style={{marginTop:"15rem"}}>
        <Resources/>
      </div>
      <div className="banner-section">
        <div style={{
          color:"#fff",
          textAlign:"center",
          fontFamily:"Open Sans",
          fontSize:"2rem",
          fontWeight:"700",
          lineHeight:"3rem",
          width:"40rem"
        }}>Want To Upload Your Assets And Become Part Of Our Resource Community
        <button style={{marginTop:"2rem"}} id='button' className='btn'>Upload now</button>
        </div>
      </div>
        <div className="container" style={{marginTop:"9rem"}}>
        <Heading content={"Design Challenges"} left={"30.5%"} />
        <div className="DesignCard container" style={{
          display:"grid",
          gridTemplateColumns:"repeat(2,auto)",
          justifyContent:"center",
          gap:"2rem"
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