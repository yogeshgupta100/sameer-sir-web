import React from "react";

const LandingPage = ({ imageurl }) => {
	return (
		<div className="landing-page" id="home-main">
			<div className="landing-page-content">
			<div className="centered-text">
				<h2>Immerse yourself into the world of Design, Technology and Innovation.</h2>
				<p>Unlocking the Secrets of User-Centered Design: A Comprehensive Journey into UX Excellence"</p>
				<div className="buttons" style={{width:"100%" , display:"flex" , justifyContent:"start" , gap:"0.5rem"}}>
				<button type="button" className="button btn" style={{borderRadius: "0.77rem",
            border: "0.104vw solid #FFF",
            fontSize:"clamp(0.44rem , 2vw , 1.25rem)",
            fontWeight:"500",
            minWidth: "35%",
    		aspectRatio: "10/2.7",
            padding:"0 1.6vw",
            margin:"2.22vw 0"
		}}>
              Explore Now
        </button>
				</div>
			</div>
				<span className="landing-img">
					<img src={imageurl} style={{
						maxWidth:"40vw",
						// maxHeight:"40vw",
						aspectRatio:"1/0.99",
						marginLeft:"0.5rem"
					}}/>
				</span>
			</div>
		</div>
	);
};

export default LandingPage;
