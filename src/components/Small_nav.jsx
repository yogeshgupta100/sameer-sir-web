import React from 'react'
import { NavLink } from 'react-router-dom'

const Small_nav = () => {
  return (
    <>
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
    </>
  )
}

export default Small_nav