import React from 'react'
import { NavLink } from 'react-router-dom'

const Small_nav = () => {
  return (
    <>
      <div className="small-nav container" style={{zIndex:"10" , width:"90vw" , position:"absolute" , margin:"0 4vw"}}>
          <ul
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              textDecoration: "none",
              alignItems: "center",
              listStyleType:"none",
              fontSize:"clamp(0.8rem , 1vw , 1.2rem)",
            }}
          >
                <li>
              <NavLink  
                to='/tutorial'
              >
                <span
                  style={{
                    cursor: "pointer",
                    fontFamily: "Raleway",
                    color: "#fff",
                    fontWeight: "medium",
                    fontStyle: "normal",
                    textAlign: "center",
                  }}>
                  Tutorials
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blogs"}
                style={{
                  textDecoration: "none",
                }}
              >
                
                <span
                  style={{
                    cursor: "pointer",
                    fontFamily: "Raleway",
                    color: "#fff",
                    fontWeight: "medium",
                    fontStyle: "normal",
                    textAlign: "center",
                  }}
                >
                  Blogs 
                </span>
              </NavLink>
            </li>
            <li>
              <a
                href='#portfolio'
                style={{
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    fontFamily: "Raleway",
                    color: "#fff",
                    fontWeight: "medium",
                    fontStyle: "normal",
                    textAlign: "center",
                  }}
                >
                  Our gallery
                </span>
              </a>
            </li>
            <li>
              <a
                href={"#designCards"}
                style={{
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    fontFamily: "Raleway",
                    color: "#fff",
                    fontWeight: "medium",
                    fontStyle: "normal",
                    textAlign: "center",
                  }}
                >
                  Design challenges
                </span>
              </a>
            </li>
            <li>
              <NavLink
                to={"/resource"}
                style={{
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    fontFamily: "Raleway",
                    color: "#fff",
                    fontWeight: "medium",
                    fontStyle: "normal",
                    textAlign: "center",
                  }}
                >
                  Design community
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
    </>
  )
}

export default Small_nav