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
			<div className="row mt-5">
				<div className="col-12 text-center mt-5">
					<Heading content={"Explore our well knitted courses"} left={"32.5%"} />
				</div>
			</div>
            
			<div
				className="course-container container"
			>
				{courses.map((course) => {
					return (
							<div className="card my-3 px-0">
								<img src={`${import.meta.env.VITE_STRAPI_SERVER_URL}${course?.attributes?.thumbnail?.data?.attributes?.url}`} className="card-img-top" alt="course1" />
								<div
									className="card-body container"
									style={{
										padding: "2.22vw 2.77vw",
										lineHeight: "1",
									}}
								>
									<span
										style={{
											textAlign: "start",
											color: "#878787",
											fontFamily: "Open Sans",
											fontSize: "1.11vw",
											fontStyle: "normal",
											fontWeight: "700",
											marginBottom: "0.22vw",
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
											fontSize: "1.44vw",
											fontStyle: "normal",
											fontWeight: "700",
											lineHeight: "140.5%",
											marginBottom: "2.22vw",
										}}
									>
										{course.attributes.name}
									</h5>
									<div
										className="container"
										style={{
											display: "flex",
											justifyContent: "space-evenly",
											fontSize: "0.99vw",
											lineHeight: "1",
											margin: "0",
											padding: "0",
										}}
									>
										<div className="content">
											<div
												style={{
													color: "rgba(117, 117, 117, 0.90)",
													fontFamily: "Open Sans",
													fontSize: "1.11vw",
													fontStyle: "normal",
													fontWeight: "700",
													marginBottom:"1vw"
												}}
											>
												Starting Date
											</div>
											<div className="course-content">{course.attributes.startDate}</div>
										</div>
										<div
											className="v-line"
											style={{
												margin: "0 0.899vw 0",
											}}
										></div>
										<div className="content">
											<div
												style={{
													color: "rgba(117, 117, 117, 0.90)",
													fontFamily: "Open Sans",
													fontSize: "1.11vw",
													fontStyle: "normal",
													fontWeight: "700",
													marginBottom:"1vw"
												}}
											>
												End Date
											</div>
											<span className="course-content">{course.attributes.endDate}</span>
										</div>
										<div
											className="v-line"
											style={{
												margin: "0 0.899vw 0",
											}}
										></div>
										<div className="content">
											<div
												style={{
													color: "rgba(117, 117, 117, 0.90)",
													fontFamily: "Open Sans",
													fontSize: "1.11vw",
													fontStyle: "normal",
													fontWeight: "700",
													marginBottom:"1vw"
												}}
											>
												Duration
											</div>
											<span className="course-content">{course.attributes.duration}</span>
										</div>
									</div>
									<NavLink
										to={`../components/Home.jsx`}
										className="purple-btn"
										style={{
											textDecoration: "none",
										}}
									>
										Learn more
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
