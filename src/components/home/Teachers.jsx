import { useEffect, useState } from "react";
import Heading from "../aboutus/Heading";
import EmpCard from "../aboutus/card";

const Teachers = ({empData}) => {

	return (
		<div className="container" style={{margin:"14vw 0 11.25vw" , paddingBottom:"0" , minWidth:"100%"}}>
				<div className="view-all-heading">
				<Heading content={"Mentors empowering your journey"} subContent={"Get groomed by elite professionals and academic gurus of the industry to accelerate your professional journey."} left={"20.5%"}></Heading>
				</div>
			<div className="teacher-btn"
				style={{
					display:"flex",
					width:"30vw",
					justifyContent:"start",
					marginLeft:"24%"
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
						aspectRatio:"3/1"
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
			<div
				className="main-card--container container"
				style={{
					width:"100%",	
					display:"flex",	
					gap:"1.3rem",
				}}
			>
				{empData && empData.map((currEle) => {
					return (
						<div
							className="teacher"
							style={{
								overflow:"hidden"
							}}
						>
							<EmpCard currEle={currEle?.attributes || currEle} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Teachers;
