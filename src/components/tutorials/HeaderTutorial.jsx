import React from "react";
import Small_nav from "../Small_nav";

const HeaderTutorial = () => {
	return (
		<>
			<div className="full-body" style={{ position: "relative", width: "100vw" }}>
				<Small_nav />
				<div
					className="blog-hero-text container"
					style={{
						display: "flex",
						justifyContent: "start",
						alignItems: "center",
						height: "60vh",
					}}
				>
					<div
						className="content"
						style={{
							display: "block",
							width: "70%",
							marginLeft: "1.2rem",
							marginTop:"10vw"
						}}
					>
						<h4 style={{
            color: "#B46BD1",
            fontSize:"clamp(1.5rem , 2.4vw , 3rem)",
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
        }}>Unveiling the World of Blogs:</h4>
        <h4 style={{
            color: "#B46BD1",
            fontSize:"clamp(1.5rem , 2.4vw , 3rem)",
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            marginBottom:"1.5vw"
        }}>A Journey into Online Learning Program </h4>
        <p style={{
            color: "#B46BD1",
            fontFamily: "Raleway",
            fontSize: "clamp(0.5rem , 2.66vw , 1.2rem)",
            fontStyle: "normal",
            fontWeight: "400",
            width:"85%"
        }}>Provide a versatile and dynamic means of sharing information, expressing thoughts,</p>
        <p style={{
            color: "#B46BD1",
            fontFamily: "Raleway",
            fontSize: "clamp(0.5rem , 2.66vw , 1.2rem)",
            fontStyle: "normal",
            fontWeight: "400",
            width:"85%",
            marginBottom:"8vw"
        }}> and connecting with an audience.</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeaderTutorial;
