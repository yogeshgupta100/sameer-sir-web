import React from "react";

const Heading = ({ content , subContent , left , btnVisible = false}) => {
  return (
    <div
      className="container heading"
      style={{
        padding:"0",
        margin:"4.44vw 0",
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
          maxWidth:"40vw",
        }}
      >
        <h4
          style={{
            color: "#B570CD",
            fontSize: "clamp(1.2rem , 4vw , 2.3rem)",
            fontWeight: "750",
            // letterSpacing:"0.11vw",
            fontStyle:"normal",
            lineHeight:"1.1",
            marginBottom:"1.443vw"
          }}
        >
          {content}
        </h4>
        <p style={{
          fontFamily:"Open Sans",
          fontSize:"clamp(0.66rem , 1.2vw , 1.2rem)",
          fontWeight:"400",
          color: "rgba(0, 0, 0, 0.65)",
          lineHeight:"1.8rem",
          opacity:"0.9",
          marginTop:"0.6rem",
          width:"100%",
          marginBottom:"1.443vw"
        }}>
          {subContent}
        </p>
        <div className="teacher-btn"
				style={{
					display: (btnVisible?"flex":"none") ,
					width:"30vw",
					justifyContent:"start",
					// marginBottom:"8vw"
				}}
			>
				<button
					className="purple-btn"
					style={{
						textDecoration: "none",
						border: "none",
						minWidth: "fit-content",	
						margin: " 0 0 2rem",	
						display: "flex",
						padding: "0 0.88vw",
						alignItems: "center",
						borderRadius: "0.44vw",
						whiteSpace:"nowrap",
						aspectRatio:"4/1.5"
					}}
				>
					<span
						style={{
							display: "flex",
							textDecoration: "none",
							fontWeight: "500",
							fontSize:"clamp(0.8rem , 2vw , 1rem)",
							paddingRight:"0.6rem",
						}}
					>
						View all
					</span>
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 18 15" fill="none">
						<path
							d="M1 7.5L17 7.5M17 7.5L11 13.5M17 7.5L11 1.5"
							stroke="white"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
      </div>
    </div>
  );
};

export default Heading;

