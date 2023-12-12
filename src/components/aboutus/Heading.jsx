import React from "react";

const Heading = ({ content , left}) => {
  return (
    <div
      className="container"
      style={{
        padding:"0",
        margin:"4.44vw 0 6.66vw 0",
        position: "relative",
        display: "flex",
        justifyContent: "start",
        flexShrink:"0",
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
            fontSize: "2.22vw",
            fontWeight: "750",
            letterSpacing:"0.11vw",
            fontStyle:"normal",
          }}
        >
          {content}
        </h3>
        <p style={{
          maxWidth:"95vw",
          fontFamily:"Open Sans",
          fontSize:"0.98vw",
          fontWeight:"300",
          color: "rgba(0, 0, 0, 0.65)",
          lineHeight:"1.6",
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.
        </p>
      </div>
      <span className="dot" style={{
        position:"relative",
        top:"-0.7992vw"
      }}></span>
      <div className="h-line"></div>
    </div>
  );
};

export default Heading;
