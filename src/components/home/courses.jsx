import { NavLink } from "react-router-dom";
import React from "react";
import Heading from "../aboutus/Heading";
import { useState, useEffect } from "react";

const Courses = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/courses?populate=*`);
			const data = await res.json();
			setCourses(data.data);
		})();
	}, []);

	return (
		<div className="course_section" style={{width:"100vw" , minHeight:"60vh"}}>
			<div className="row" style={{margin:"5.55vw 0 3.33vw 5.55vw"}}>
				<div className="col-12 container">
					<Heading content={"Explore our well knitted courses"} left={"32.5%"} />
				</div>
			</div>
            
			<div
				className="course-container container"
			style={{marginBottom:"8vw"}}>
				{courses.map((course) => {
					return (
							<div className="card my-3 px-0">
								<img src={`${import.meta.env.VITE_STRAPI_SERVER_URL}${course?.attributes?.thumbnail?.data?.attributes?.url}`} className="card-img-top" alt="course1" />
								<div
									className="card-body container"
								>
									<div>
									<span className="course-subtitle"
										style={{
											textAlign: "start",
											color: "#878787",
											fontFamily: "Open Sans",
											fontSize: "clamp(0.7rem , 2vw , 1.4rem)",
											fontStyle: "normal",
											fontWeight: "700",
											// marginBottom: "0.22vw",
											lineHeight:"1"
										}}
									>
										{course.attributes.category}
									</span>
									<h5
										className="card-title"
										style={{
											color: "#B46BD1",
											fontFamily: "Open Sans",
											fontSize: "clamp(0.8rem , 2vw , 1.5rem)",
											fontStyle: "normal",
											fontWeight: "700",
											lineHeight: "140.5%",
											marginBottom: "2.22vw",
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
											gap:"0.3rem"
										}}
									>
										<div className="content" style={{textAlign:"start"}}>
											<div
												style={{
													color: "rgba(117, 117, 117, 0.90)",
													fontFamily: "Open Sans",
													// fontSize: "1.11vw",
													fontStyle: "normal",
													fontWeight: "700",
													marginBottom:"0.88vw",
												}}
											>
												Starting Date
											</div>
											<span className="course-data" style={{fontSize: "clamp(0.5rem , 1.5vw , 1rem)"}}>{course.attributes.startDate}</span>
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
											<span className="course-data" style={{fontSize: "clamp(0.5rem , 1.5vw , 1rem)"}}>{course.attributes.endDate}</span>
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
											<span className="course-data" style={{fontSize: "clamp(0.5rem , 1.5vw , 1rem)"}}>{course.attributes.duration}</span>
										</div>
									</div>
									<NavLink
										to={`../components/Home.jsx`}
										className="purple-btn course-btn"
										style={{
											textDecoration: "none",
											fontSize: "clamp(0.5rem , 1.5vw , 1rem)"
										}}
									>
										Request a call
									</NavLink>
								</div>
							</div>
					);
				})}

			</div>
			</div>
	);
};

export default Courses;
