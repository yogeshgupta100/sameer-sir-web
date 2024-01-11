import React from "react";

const Heading = ({ content , subContent , left}) => {
  return (
    <div
      className="container heading"
      style={{
        padding:"0",
        margin:"4.44vw 0 0",
        position: "relative",
        display: "flex",
      }}
      >
      <span className="dot" style={{
        position:"relative",
        top:"-0.7992vw"
      }}></span>
      <div className="h-line" style={{maxHeight:"0.09vw" , minWidth:`${left}` , marginRight:"1rem"}}></div>
      <div
        className="content heading-all"
        style={{
          textAlign: "start",
          fontStyle: "normal",
          position: "relative",
          top: "-1.332vw",
          backgroundColor:"#fff",
          // flexShrink:"0",
          maxWidth:"50vw",
        }}
      >
        <h4
          style={{
            color: "#B570CD",
            fontSize: "clamp(1.2rem , 4vw , 2.3rem)",
            fontWeight: "750",
            // letterSpacing:"0.11vw",
            fontStyle:"normal",
            lineHeight:"1.1"
          }}
        >
          {content}
        </h4>
        <p style={{
          fontFamily:"Open Sans",
          fontSize:"clamp(0.66rem , 1vw , 1rem)",
          fontWeight:"400",
          color: "rgba(0, 0, 0, 0.65)",
          lineHeight:"1.3",
          opacity:"0.9",
          marginTop:"0.6rem",
          width:"70%"
        }}>
          {subContent}
        </p>
      </div>
    </div>
  );
};

export default Heading;

