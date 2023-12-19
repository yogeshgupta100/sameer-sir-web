import React from "react";

const Heading = ({ content , left}) => {
  return (
    <div
      className="container heading"
      style={{
        padding:"0",
        margin:"4.44vw 0 6vw 0",
        position: "relative",
        display: "flex",
        justifyContent: "start",
      }}
    >
      <div
        className="content"
        style={{
          textAlign: "start",
          fontStyle: "normal",
          position: "absolute",
          top: "-1.332vw",
          left: `${left}`,
          backgroundColor:"#fff",
          flexShrink:"0",
          maxWidth:"40vw"
        }}
      >
        <h3
          style={{
            color: "rgba(173, 96, 200, 0.90)",
            fontSize: "clamp(1rem , 4vw , 2rem)",
            fontWeight: "750",
            letterSpacing:"0.11vw",
            fontStyle:"normal",
          }}
        >
          {content}
        </h3>
        <p style={{
          fontFamily:"Open Sans",
          fontSize:"clamp(0.66rem , 1.33vw , 1rem)",
          fontWeight:"400",
          color: "rgba(0, 0, 0, 0.65)",
          lineHeight:"1.1",
          opacity:"0.8"
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.
        </p>
      </div>
      <span className="dot" style={{
        position:"relative",
        top:"-0.7992vw"
      }}></span>
      <div className="h-line" style={{maxHeight:"0.09vw" , minWidth:"50vw"}}></div>
    </div>
  );
};

export default Heading;
