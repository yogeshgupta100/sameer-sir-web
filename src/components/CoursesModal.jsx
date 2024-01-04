import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CoursesModal() {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/courses?populate=*`);
			const data = await res.json();
			setCourses(data.data);
		})();
	}, []);
	return (
		<div
			style={{
				alignItems: "start",
				borderRadius: "0.99vw",
				display:"grid",
				gridTemplateColumns:"3fr 1fr",
				margin:"3.77vw 4.77vw",
			}}
		>
			<div
				className="inner-card"
				style={{
					borderRadius: "0.99vw",
					backgroundColor: "transparent",
					width: "100%",
					aspectRatio: "8/4",
					alignItems: "start",
					fontWeight: "bold",
					fontSize: "1.332vw",
					display:"grid",
					gridTemplateColumns:"1fr 1fr 1fr",
					gap:"1rem",
				}}
				>
				{courses.map((course) => {
					return (
						<div className="card" style={{
								border:"0.714px solid #B46BD1",
								borderRadius: "0.89238rem",
								height:"100%",
								overflow:"hidden",
							}}>
								<img src={`${import.meta.env.VITE_STRAPI_SERVER_URL}${course?.attributes?.thumbnail?.data?.attributes?.url}`} className="card-img-top" alt="course1" style={{width:"100%" , aspectRatio:"2/1.3" , borderRadius: "0.89238rem 0.89238rem 0 0"}} />
								<div
									className="card-body container">
									<div>
									<span className="course-subtitle"
										style={{
											textAlign: "start",
											color: "#878787",
											fontFamily: "Open Sans",
											fontSize: "clamp(0.3rem , 1.5vw , 1rem)",
											fontStyle: "normal",
											fontWeight: "700",
											lineHeight:"1",
											whiteSpace:"nowrap"
										}}
									>
										{course.attributes.category}
									</span>
									<h5
										className="card-title"
										style={{
											color: "#B46BD1",
											fontFamily: "Open Sans",
											fontSize: "clamp(0.4rem , 1.5vw , 1.2rem)",
											fontStyle: "normal",
											fontWeight: "700",
											lineHeight: "140.5%",
											height:"5rem",
											overflow:"hidden",
										}}
									>
										{course.attributes.name}
									</h5>
									</div>
									<div
										className="content-course"
										style={{
											display: "grid",
											gridTemplateColumns:"1fr 1fr 1fr",
											fontSize: "clamp(0.5rem , 1.5vw , 1rem)",
											lineHeight: "1",
											gap:"0.3rem",
											whiteSpace:"nowrap",
											marginBottom:"1rem"
										}}
									>
										<div className="content" style={{textAlign:"start"}}>
											<div
												style={{
													color: "rgba(117, 117, 117, 0.90)",
													fontFamily: "Open Sans",
													fontStyle: "normal",
													fontWeight: "700",
													marginBottom:"0.88vw",
												}}
											>
												Starting Date
											</div>
											<span className="course-data" style={{fontSize: "clamp(0.5rem , 1.5vw , 1rem)" , color: "#B46BD1" , fontWeight:"500"}}>{course.attributes.batches[0].startDate}</span>
										</div>
										<div className="content" style={{textAlign:"center"}}>
											<div
												style={{
													color: "rgba(117, 117, 117, 0.90)",
													fontFamily: "Open Sans",
													fontStyle: "normal",
													fontWeight: "700",
													marginBottom:"0.88vw"
												}}
											>
												End Date
											</div>
											<span className="course-data" style={{fontSize: "clamp(0.5rem , 1.5vw , 1rem)", color: "#B46BD1" , fontWeight:"500"}}>{course.attributes.batches[0].endDate}</span>
										</div>
										<div className="content" style={{textAlign:"center"}}>
											<div
												style={{
													color: "rgba(117, 117, 117, 0.90)",
													fontFamily: "Open Sans",
													fontStyle: "normal",
													fontWeight: "700",
													marginBottom:"0.88vw"
												}}
											>
												Duration
											</div>
											<span className="course-data" style={{fontSize: "clamp(0.5rem , 1.5vw , 1rem)" , color: "#B46BD1" , fontWeight:"500"}}>{course.attributes.batches[0].duration}</span>
										</div>
									</div>
									<NavLink
										to={`/courses/${course.id}`}
										className="purple-btn course-btn"
										style={{
											textDecoration: "none",
											fontSize: "clamp(0.5rem , 1.5vw , 1rem)",
											marginTop:"0"
										}}
									>
										Learn more
									</NavLink>
								</div>
							</div>
					);
				})}
				
			</div>
			<div
				className="second-card"
				style={{
					display: "flex",
					backgroundColor: "transparent",
					width: "120%",
					aspectRatio: "1/1.3",
					alignItems: "start",
					fontWeight: "bold",
					fontSize: "1.332vw",
				}}
			>
				<div 
				className="inner-card"
				style={{
					margin: "0 0 0 2rem",
					borderLeft:"1.7px solid #C4C4C4",
					height:"95%",
					width:"100%",
					color:"#9844C5",
					// paddingTop:"2rem"
				}}
			>
				<div style={{ fontWeight: "700", marginBottom: "0.555vw" , paddingLeft:"2rem", fontSize:"clamp(16px , 2vw , 20px)"}}>Lorem ipsum dolor sit amet consectetur.</div>
				<div style={{ fontWeight: "600" , paddingLeft:"2rem" , fontSize:"clamp(12px , 2vw , 16px)"}}>Lorem ipsum dolor sit amet consectetur.</div>
				<div style={{height:"80%", width:"auto" , display:"flex" , flexDirection:"column" , justifyContent:"flex-end" , fontWeight: "600" , fontSize:"clamp(12px , 2vw , 16px)"}}>
					<ul style={{display:"flex" , flexDirection:"column"  , gap:"2rem" , alignItems:"center" , justifyContent:"center"}}>
						<li className="course-modal-items">Lorem ipsum dolor sit amet consectetur.</li>
						<li className="course-modal-items">Lorem ipsum dolor sit amet consectetur.</li>
						<li className="course-modal-items">Lorem ipsum dolor sit amet consectetur.</li>
						<li className="course-modal-items">Lorem ipsum dolor sit amet consectetur.</li>
					</ul>
				</div>
				
			</div>
			</div>
		</div>
	);
}
