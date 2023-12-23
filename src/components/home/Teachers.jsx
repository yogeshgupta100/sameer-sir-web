import { useEffect, useState } from "react";
import Heading from "../aboutus/Heading";
import EmpCard from "../aboutus/card";

const Teachers = () => {
	const [empData, setEmpData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/employees?populate=*`);
      const data = await res.json();
      setEmpData(data.data);
    })();
  }, []);

	return (
		<div className="container" style={{margin:"11vw 0 0" , paddingBottom:"0"}}>
				<div className="view-all-heading">
				<Heading content={"Explore our well knitted courses"} left={"20.5%"}></Heading>
				</div>
			<div
				style={{
					display:"flex",
					width:"27vw",
					justifyContent:"flex-end",
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
							fontSize:"clamp(0.8rem , 1.5vw , 1rem)",
							paddingRight:"0.6rem",
						}}
					>
						View all
					</span>
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 18 15" fill="none">
						<path
							d="M1 7.5L17 7.5M17 7.5L11 13.5M17 7.5L11 1.5"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
			<div
				className="main-card--container container"
				style={{
					minWidth:"100vw",
					display:"flex",
					justifyContent:"center",
					gap:"1.3rem",
				}}
			>
				{empData.map((currEle) => {
					return (
						<div
							className="teacher"
							style={{
								overflowY: "hidden",
							}}
						>
							<EmpCard currEle={currEle} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Teachers;
