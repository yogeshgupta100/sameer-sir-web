import React from "react";

const LandingPage = ({ imageurl }) => {
	return (
		<div className="landing-page" id="home-main">
			<div className="landing-img" style={{ backgroundImage: `url(${imageurl})` }}></div>
			<div className="centered-text">
				<h2>User Experience Revolution: Designing Tomorrow's World</h2>
				<p>Unlocking the Secrets of User-Centered Design: A Comprehensive Journey into UX Excellence"</p>
				<button type="button" className="btn">
					Explore now
				</button>
			</div>
		</div>
	);
};

export default LandingPage;
