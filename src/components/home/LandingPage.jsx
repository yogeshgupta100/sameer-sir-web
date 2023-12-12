import React from "react";

const LandingPage = ({ imageurl }) => {
	return (
		<div className="landing-page" id="home-main">
			<div className="landing-page-content">
			<div className="centered-text">
				<h2>User Experience Revolution: Designing Tomorrow's World</h2>
				<p>Unlocking the Secrets of User-Centered Design: A Comprehensive Journey into UX Excellence"</p>
				<button type="button" className="btn" style={{borderRadius: "0.72vw",
            border: "0.104vw solid #FFF",
            fontSize:"1.11vw",
            fontWeight:"500",
            width:"fit-content",
            minHeight:"4vw",
            padding:"0 1.44vw",
            margin:"2.22vw 0"
		}}>
              Explore Now
        </button>
			</div>
				<span className="landing-img">
					<img src={imageurl} style={{
						maxWidth:"40vw",
						minHeight:"30vw",
					}}/>
				</span>
			</div>
		</div>
	);
};

export default LandingPage;
