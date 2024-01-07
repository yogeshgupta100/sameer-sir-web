import React from "react";

const LandingPage = ({ imageurl , title , subTitle , buttonText , Link}) => {
	return (
		<div className="landing-page container" id="home-main">
			<div className="landing-page-content container">
			<div className="centered-text container">
				<h2>{title}</h2>
				<p>{subTitle}</p> 
				<a href={Link} style={{textDecoration:"none"}}>
				<button type="button" className="button btn" style={{
					borderRadius: "12.32px",
					border: "0.104vw solid #FFF",
					fontSize:"clamp(0.44rem , 2vw , 1.25rem)",
					fontWeight:"500",
					minWidth: "35%",
					aspectRatio: "10/2.7",
					padding:"0 1.6vw",
					margin:"2.22vw 0",
					whiteSpace:"nowrap"
				}}>
				<span>
              {buttonText}
        </span>
				</button>
				</a>
			</div>
				<span className="landing-img container" style={{marginRight:"3rem"}}>
					<img src={imageurl} style={{
						maxWidth:"40vw",
						aspectRatio:"1/0.99",
						// marginLeft:"0.5rem"
					}}/>
				</span>
			</div>
		</div>
	);
};

export default LandingPage;
