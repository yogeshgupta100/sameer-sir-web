import React from "react";
import Header from "../../Header";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const Graphic = ({ data }) => {
  const { courseId } = useParams();

  const applyNow = () => {
    fetch(`${import.meta.env.VITE_EXPRESS_SERVER_URL}/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: courseId, quantity: 1 }
        ],
      }),
    })
      .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      })
      .then(({ url }) => {
        window.location = url
      })
      .catch(e => {
        console.error(e.error)
      })
  }
  return (
    <>
      <div
        className="landing-page"
        style={{ height: "130vh", position: "relative" , marginBottom:"33.3vw"}}
      >
        <Header />
        <div
          className="centered-text"
          style={{ top: "48%", fontStyle: "normal", left: "34%" }}
        >
          <h2
            style={{
              maxWidth: "53.28vw",
              fontSize: "2.664vw",
              fontWeight: "700",
              lineHeight: "3.33vw",
              fontFamily: "Raleway",
              letterSpacing: "0.111vw",
            }}
          >
            {data ? data.attributes.name : "loading..."}
          </h2>
          <p style={{ lineHeight: "2.08vw" }}>
           {data ? data.attributes.description : "loading..."}
          </p>
          <div className="buttons" style={{ display: "flex" }}>
            <button
              type="button"
              className="button"
              id="button"
              onClick={applyNow}
              style={{
                borderRadius: "0.666vw",
                border: "0.076vw solid #B86CD2",
                marginRight: "1.11vw",
                padding: "0.693vw 3.663vw",
                fontWeight: "500",
                fontSize: "1.1544vw",
              }}
            >
              Apply now
            </button>
            <NavLink to={"/forms/downloadSyllabus"}>
            <button
              type="button"
              className="btn"
              // id='button'
              style={{
                borderRadius: "0.666vw",
                border: "0.076vw solid #B86CD2",
                marginRight: "1.11vw",
                padding: "0.693vw 3.663vw",
                fontWeight: "500",
                fontSize: "1.1544vw",
              }}
            >
              Download syllabus
            </button>
            </NavLink>
          </div>
          <div style={{ width: "100%", marginTop: "5.55vw" }}>
            <p style={{ margin: "0" }}>Tools covered</p>
            <div
              className="extra-buttons"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,7.77vw)",
                gap: "0.726vw",
                marginTop: "0",
              }}
            >
              <button
                type="button"
                className="button"
                id="button"
                style={{
                  borderRadius: "0.333vw",
                  border: "0.076vw solid #B86CD2",
                  fontWeight: "400",
                  fontSize: "0.888vw",
                }}
              >
                Unreal Engine
              </button>
              <button
                type="button"
                className="button"
                id="button"
                style={{
                  borderRadius: "0.333vw",
                  border: "0.076vw solid #B86CD2",
                  fontWeight: "400",
                  fontSize: "0.888vw",
                }}
              >
                Unity 3d
              </button>
              <button
                type="button"
                className="button"
                id="button"
                style={{
                  borderRadius: "0.333vw",
                  border: "0.076vw solid #B86CD2",
                  fontWeight: "400",
                  fontSize: "0.888vw",
                }}
              >
                Steam VR
              </button>
              <button
                type="button"
                className="button"
                id="button"
                style={{
                  borderRadius: "0.333vw",
                  border: "0.076vw solid #B86CD2",
                  fontWeight: "400",
                  fontSize: "0.888vw",
                }}
              >
                Vuforia
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" about-first2"
        style={{ position: "absolute", bottom: "-36.63vw" , display:"flex", alignItems:"center" , height:"27.75vw" , paddingLeft:"3.33vw"}}
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
    </>
  );
};

export default Graphic;
