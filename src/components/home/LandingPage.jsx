import React from "react";

const LandingPage = ({ imageurl , title , subTitle , buttonText , Link}) => {
	return (
		<div className="landing-page" id="home-main">
			<div className="landing-page-content">
			<div className="centered-text">
				<h2>{title}</h2>
				<p>{subTitle}</p> 
				<div style={{display:"flex" , width:"70%" , justifyContent:"flex-start" , gap:"1rem"}}>
				{/* <a href={Link} style={{textDecoration:"none"}}> */}
				<button type="button" className="button btn" style={{
					borderRadius: "12.32px",
					border: "0.104vw solid #FFF",
					fontSize:"clamp(0.44rem , 2vw , 1.25rem)",
					fontWeight:"500",
					minWidth: "40%",
					aspectRatio: "10/2.8",
					padding:"0 1vw",
					margin:"2.22vw 0",
					whiteSpace:"nowrap",
				}}>
				<span>
              {buttonText}
        </span>
				</button>
				{/* </a> */}
				<button type="button" className="purple-button" id="button" style={{
					borderRadius: "12.32px",
					border: "0.104vw solid #FFF",
					fontSize:"clamp(0.44rem , 2vw , 1.25rem)",
					fontWeight:"500",
					minWidth: "40%",
					aspectRatio: "11/2.7",
					padding:"1vw 1vw",
					margin:"2.22vw 0",
					whiteSpace:"nowrap"
				}}>
				<span>
				Reach out to us
        </span>
				</button>
				</div>
			</div>
				<div className="landing-img" style={{width:"75%"}}>
					<img src={imageurl} style={{
						aspectRatio:"1/1",
						objectFit:"contain",
						display:"inline-block"
					}}/>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
