import React from 'react'
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Courses_container = () => {
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
				className="course-container"
				id="courses"
			style={{marginBottom:"18vw"}}>
				{courses.map((course) => {
					return (
							<div className="card">
								<img src={course?.attributes?.thumbnail?.data?.attributes?.url} className="card-img-top" alt="course1" />
								<div
									className="card-body container"
								>
									<div>
									<span className="course-subtitle"
										style={{
											color: "#878787",
											fontFamily: "Open Sans",
											fontSize: "clamp(0.7rem , 1vw , 0.9rem)",
											fontStyle: "normal",
											fontWeight: "700",
											lineHeight:"125%"
										}}
									>
										{course.attributes.category}
									</span>
									<h5
										className="card-title"
										style={{
											color: "#B46BD1",
											fontFamily: "Open Sans",
											fontSize: "clamp(1rem , 1.5vw , 1.5rem)",
											fontStyle: "normal",
											fontWeight: "700",
											lineHeight: "121.5%",
											height:"clamp(3.5rem , 1.5vw , 5rem)",
											overflow:"hidden",
										}}
									>
										{course.attributes.name}
									</h5>
									</div>
									<div
										className="content-course"
										style={{
											width:"100%",
											display:"flex",
											fontSize: "clamp(0.5rem , 1.2vw , 1rem)",
											lineHeight: "130%",
											justifyContent:"space-between"
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
													whiteSpace:"nowrap",
												}}
											>
												Starting Date
											</div>
											<span className="course-data" style={{fontSize: "clamp(0.5rem , 1.2vw , 1rem)" , color: "#B46BD1" , fontWeight:"500" , whiteSpace:"nowrap"}}>{course.attributes.batches[0].startDate}</span>
										</div>
										<div className="v-line" style={{minWidth:"0.0525rem" , backgroundColor:"#CDCDCD" , height:"100%" , margin:"0" , alignSelf:"center"}}></div>
										<div className="content" style={{textAlign:"center" , whiteSpace:"nowrap"}}>
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
											<span className="course-data" style={{fontSize: "clamp(0.5rem , 1.2vw , 1rem)", color: "#B46BD1" , fontWeight:"500"}}>{course.attributes.batches[0].endDate}</span>
										</div>
										<div className="v-line" style={{minWidth:"0.0525rem" , backgroundColor:"#CDCDCD" , height:"100%" , margin:"0", alignSelf:"center"}}></div>
										<div className="content" style={{textAlign:"center" , whiteSpace:"nowrap"}}>
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
											<span className="course-data" style={{fontSize: "clamp(0.5rem , 1.2vw , 1rem)" , color: "#B46BD1" , fontWeight:"500"}}>{course.attributes.batches[0].duration}</span>
										</div>
									</div>
									<NavLink
										to={`/courses/${course.id}`}
										className="purple-btn course-btn"
										style={{
											textDecoration: "none",
											fontSize: "clamp(0.5rem , 1.5vw , 1rem)"
										}}
									>
										Learn more
									</NavLink>
								</div>
							</div>
					);
				})}

			</div>
  )
}

export default Courses_container