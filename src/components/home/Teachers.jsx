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
		<>
			<div
				className="container"
				style={{
					margin: "11vw 0 0",
				}}
			>
				<span className="view-all-heading">
				<Heading content={"Explore our well knitted courses"} left={"20.5%"}></Heading>
				</span>
				<button
					className="purple-btn"
					style={{
						textDecoration: "none",
						border: "none",
						maxWidth: "8vw",
						fontSize: "0.87vw",	
						margin: " 3.33vw 0 0 20.5%",	
						display: "flex",
						padding: "0.6vw",
						alignItems: "center",
						maxHeight: "2.66vw",
						borderRadius: "0.44vw",
						textAlign:"center"
					}}
				>
					<span
						style={{
							display: "flex",
							textDecoration: "none",
							marginTop: "1rem",
							fontWeight: "500",
							fontSize:"1.2vw",
							flexWrap:"wrap",
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
					maxWidth:"90vw",
					display:"flex",
					justifyContent:"center",
					// gap:"1.3rem",
					// minHeight:"30vw"
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
		</>
	);
};

export default Teachers;
