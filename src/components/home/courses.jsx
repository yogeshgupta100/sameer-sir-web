import { NavLink } from "react-router-dom";
import React from "react";
import Heading from "../aboutus/Heading";
import { useState, useEffect } from "react";

const Courses = ({ cardData }) => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/courses?populate=*`);
			const data = await res.json();
			setCourses(data.data);
		})();
	}, []);

	return (
		<div className="container py-0 my-0 mb-0 mt-0">
			<div className="row mt-5">
				<div className="col-12 text-center mt-5">
					<Heading content={"Explore our well knitted courses"} left={"32.5%"} />
				</div>
			</div>
            

			<div
				className="mt-3"
				style={{
					width: "100%",
					display: "grid",
					gridTemplateColumns: "repeat(3,auto)",
					margin: "0 0 12rem",
				}}
			>
				{courses.map((course) => {
					return (
						<div className="row justify-content-around" id={`${course.attributes.name}`}>
							<div className="card my-3 px-0">
								<img src={`${import.meta.env.VITE_STRAPI_SERVER_URL}${course?.attributes?.thumbnail?.data?.attributes?.url}`} className="card-img-top" alt="course1" />
								<div
									className="card-body container"
									style={{
										padding: "2rem 2.5rem",
										lineHeight: "1",
									}}
								>
									<p
										style={{
											textAlign: "start",
											color: "#878787",
											fontFamily: "Open Sans",
											fontSize: "0.8rem",
											fontStyle: "normal",
											fontWeight: "700",
											lineHeight: "125%" /* 1.17188rem */,
											marginBottom: "0.2rem",
										}}
									>
										{course.attributes.category}
									</p>
									<h5
										className="card-title"
										style={{
											color: "#B46BD1",
											// fontFamily: "Open Sans",
											fontSize: "1.3rem",
											fontStyle: "normal",
											fontWeight: "700",
											lineHeight: "120.5%" /* 1.8225rem */,
											marginBottom: "2rem",
										}}
									>
										{course.attributes.name}
									</h5>
									<div
										className="container"
										style={{
											display: "flex",
											justifyContent: "space-evenly",
											fontSize: "0.9rem",
											lineHeight: "1",
											margin: "0",
											padding: "0",
										}}
									>
										<div className="content">
											<p
												style={{
													color: "rgba(117, 117, 117, 0.90)",
													fontFamily: "Open Sans",
													fontSize: "0.8rem",
													fontStyle: "normal",
													fontWeight: "700",
													lineHeight: "130%" /* 1.3rem */,
												}}
											>
												Starting Date
											</p>
											<p className="course-content">{course.attributes.startDate}</p>
										</div>
										<div
											className="v-line"
											style={{
												margin: "0 0.81rem 0",
											}}
										></div>
										<div className="content">
											<p
												style={{
													color: "rgba(117, 117, 117, 0.90)",
													fontFamily: "Open Sans",
													fontSize: "0.8rem",
													fontStyle: "normal",
													fontWeight: "700",
													lineHeight: "130%" /* 1.3rem */,
												}}
											>
												End Date
											</p>
											<p className="course-content">{course.attributes.endDate}</p>
										</div>
										<div
											className="v-line"
											style={{
												margin: "0 0.81rem 0",
											}}
										></div>
										<div className="content">
											<p
												style={{
													color: "rgba(117, 117, 117, 0.90)",
													fontFamily: "Open Sans",
													fontSize: "0.8rem",
													fontStyle: "normal",
													fontWeight: "700",
													lineHeight: "130%" /* 1.3rem */,
												}}
											>
												Duration
											</p>
											<p className="course-content">{course.attributes.duration}</p>
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
						</div>
					);
				})}

				{/* <div className="row justify-content-around">
                        <div className="card my-3 px-0" style={{width: "24.8rem" , overflow:"hidden"}}>
                            <img src="/assets/course2.jpg" className="card-img-top" alt='course1'/>
                    <div className="card-body text-center">
                        <h5 className="card-title">UI/UX Design</h5>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <NavLink to={`../components/Home.jsx`} className="btn btn-outline-primary">Buy Now</NavLink>
                    </div>
</div>
                        </div>
                        <div className="row justify-content-around">
                        <div className="card my-3 px-0" style={{width: "24.8rem" , overflow:"hidden"}}>
                            <img src="/assets/course3.jpg" className="card-img-top" alt='course1'/>
                    <div className="card-body text-center">
                        <h5 className="card-title">UI/UX Design</h5>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <NavLink to={`../components/Home.jsx`} className="btn btn-outline-primary">Buy Now</NavLink>
                    </div>
</div>
                        </div> */}
			</div>
		</div>
	);
};

export default Courses;
