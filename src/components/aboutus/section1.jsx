import React from "react";
import Heading from "./Heading";

const Section1 = ({ text , subContent , imageUrl1 , imageUrl2 , director = false}) => {
  return (
    <>
      <div className="section1-main container">
        <Heading
          content={text}
          subContent={
            subContent
          }
          left="30vw"
        />
        <div className="section1-main2">
          <div className="first">
            <div
              className="first-content"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div className="first-img">
                <img src={imageUrl1} style={{width:"100%" , aspectRatio: "2/2.7"}} />
              </div>
              <div className="first-para">
                <span  style={{
                display: (director?"block":"none")
              }}>
                <h4>Ruchika Raina</h4>
                <p>Director</p>
                </span>
              </div>
            </div>
            <div
              className="first-content2"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                position: "relative",
              }}
            >
              <div className="first-para">
                <span  style={{
                display: (director?"block":"none"),
              }}>
                <h4>Omkar Nath Yadav</h4>
                <p>Director</p>
                </span>
              </div>
              <div className="first-img" style={{
                marginLeft: (director?"0.5rem":"15vw")
              }}>
              <img src={imageUrl2} style={{width:"100%" , aspectRatio: "2/2.5"}} />
              </div>
            </div>
          </div>
          <div className="second">
            <div
              className="container"
              style={{
                height: "100%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <ul className="bar" style={{ maxWidth: "80%"}}>
                <li>
                  <strong>Expert Instructors:</strong> Our courses are led by
                  industry experts who bring real-world experience to the
                  virtual classroom. You'll learn from professionals who have
                  worked on cutting-edge projects for renowned companies.
                </li>
                <li>
                  <strong>Interactive Learning:</strong> Learning doesn't stop
                  at lectures. Our hands-on workshops, projects, and peer
                  collaboration opportunities allow you to apply what you've
                  learned in practical, real-world scenarios.
                </li>
                <li>
                  <strong>Global Community:</strong> Join a diverse and thriving
                  community of designers, from beginners to seasoned
                  professionals. Share ideas, seek feedback, and build
                  connections that will last a lifetime.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
